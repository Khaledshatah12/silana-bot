import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/963980677944
*instagram:*\ninstagram.com/kh_sh932
*قناتي واتساب :* https://whatsapp.com/channel/0029VaCoD2sAYlUSoRyroy1A/3377

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
