import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/+963980677944
*instagram:*\ninstagram.com/kh_sh932

*channel:*\nhttps://whatsapp.com/channel/0029VaCoD2sAYlUSoRyroy1A

*facebook page:*\nhttps://www.facebook.com/profile.php?id=100083221005024&mibextid=kFxxJD


`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
