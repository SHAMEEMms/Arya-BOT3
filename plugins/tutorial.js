let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `


COME PM BRO
wa.me//+19412543858


`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

