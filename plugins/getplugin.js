import cp, { exec as _exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';

const exec = promisify(_exec).bind(cp);

const handler = async (m, { conn, isROwner, usedPrefix, command, text }) => {
    await m.reply(global.wait);
    if (!isROwner) return;

    const ar = Object.keys(plugins);
    const ar1 = ar.map((v) => v.replace('.js', ''));
    
    if (!text) {
        throw `هذا الامر خاص بالحصول على كود اي ميزة لديك في السكريبت مثال:\n${usedPrefix + command} bard`;
    }
    
    if (!ar1.includes(text)) {
        return m.reply(`🗃️ الــ plugin التي تبحث عنها غير موجودة عندك في السكريبت 😐 هذه هي الميزات التي توجد عندك في السكريبت :  !\n\n${ar1.map((v) => " " + v).join`\n`}`);
    }

    let o;
    try {
        o = await exec('cat plugins/' + text + '.js');
    } catch (e) {
        o = e;
    } finally {
        const { stdout, stderr } = o;
        if (stdout.trim()) {
            await conn.sendMessage(m.chat, { text: stdout }, { quoted: m });
            await conn.sendMessage(m.chat, { 
                document: fs.readFileSync(`./plugins/${text}.js`), 
                mimetype: 'application/javascript', 
                fileName: `${text}.js` 
            }, { quoted: m });
        }
        if (stderr.trim()) {
            await conn.sendMessage(m.chat, { text: stderr }, { quoted: m });
        }
    }
};

handler.help = ['getplugin'].map((v) => v + ' *<nombre>*');
handler.tags = ['owner'];
handler.command = /^(getplugin|gp|kk)$/i;
handler.rowner = true;

export default handler;
