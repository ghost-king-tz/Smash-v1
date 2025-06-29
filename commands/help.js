const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `    let str = `❤️ *_Hello ${name}, ${greeting}! Welcome to my menu!* 🥳
╭═══〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍
┃✰│━━━❮❮ CMD LINE ❯❯━━━━━━
┃✰│𝙽𝚊𝚖𝚎: ${global.author}
┃✰│𝚃𝚘𝚝𝚊𝚕: 700+ Features
┃✰│Network:LTE
┃✰│ᴠᴇʀꜱɪᴏɴ: BETA
┃✰│ᴏᴡɴᴇʀ : *loft*
┃✰│ɴᴜᴍʙᴇʀ: 254743706010
┃✰│HOSTER: *linux Platform*
┃✰│ᴍᴏᴅᴇ: *Unkown*
┃✰│ᴘʀᴇғɪx: *Multi-Prefix*
┃✰│Uptime: ${uptime}
┃✰│Today's Date: unknown 
┃✰│Current Time: unknown
┃✰│   ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃✰│   ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃✰│   *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 
╰──────────────────
Thank you for choosing silva md
powered by Sylivanus❤️
─═✧✧═─ *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 ─═✧✧═─`

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: str
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "Use The Below Buttons"
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({
                            image: { url: 'https://files.catbox.moe/8324jm.jpg' }
                        }, { upload: conn.waUploadToServer })),
                        title: null,
                        subtitle: null,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                 "name": "single_select",
                "buttonParamsJson": 
                                "{\"title\":\"TAP TO OPEN\",\"sections\":[{\"title\":\"HERE IS ALL LIST OF MENU\",\"highlight_label\":\"SILVA TECH INC\",\"rows\":[{\"header\":\"\",\"title\":\"💀 Bot Menu\",\"description\":\"The Bot's secret control panel. What's your command, oh great one?\",\"id\":\".botmenu\"},{\"header\":\"\",\"title\":\"📚 Owner Menu\",\"description\":\"The sacred scroll only for the chosen one. Yep, that's you, Boss!\",\"id\":\".ownermenu\"},{\"header\":\"\",\"title\":\"🧑‍🤝‍🧑 Group Menu\",\"description\":\"Group shenanigans central! Unite, chat, conquer!\",\"id\":\".groupmenu\"},{\"header\":\"\",\"title\":\"📥 Download Menu\",\"description\":\"'DL' stands for 'Delicious Loot'. Come grab your goodies!\",\"id\":\".dlmenu\"},{\"header\":\"\",\"title\":\"🎉 Fun Menu\",\"description\":\"The bot's party hat. Games, jokes and instant ROFLs. Let's get this party started!\",\"id\":\".funmenu\"},{\"header\":\"\",\"title\":\"💰 Economy Menu\",\"description\":\"Bling bling! Your personal vault of virtual economy. Spend or save? Choose wisely!\",\"id\":\".economymenu\"},{\"header\":\"\",\"title\":\"🎮 Game Menu\",\"description\":\"Enter the gaming arena. May the odds be ever in your favor!\",\"id\":\".gamemenu\"},{\"header\":\"\",\"title\":\"🎨 Sticker Menu\",\"description\":\"A rainbow of stickers for your inner artist. Make your chats pop!\",\"id\":\".stickermenu\"},{\"header\":\"\",\"title\":\"🧰 Tool Menu\",\"description\":\"Your handy-dandy toolkit. What's your pick, genius?\",\"id\":\".toolmenu\"},{\"header\":\"\",\"title\":\"🎩 Logo Menu\",\"description\":\"Create a logo that screams YOU. Or whispers. You choose the volume.\",\"id\":\".logomenu\"},{\"header\":\"\",\"title\":\"🌙 NSFW Menu\",\"description\":\"The After Dark menu. But remember, sharing adult secrets must be consent-based.\",\"id\":\".nsfwmenu\"}]}]}" 
                },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": "{\"display_text\":\"Main Menu 💖☠️\",\"id\":\".main\"}"
                            },
                             {
                                "name": "quick_reply",
                                "buttonParamsJson": "{\"display_text\":\"Owner✨❤️\",\"id\":\".owner\"}"
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": "{\"display_text\":\"SECOND MENU 📲\",\"id\":\".menu2\"}"
                            },
                            {
                                "name": "cta_url",
                                "buttonParamsJson": "{\"display_text\":\"BOT SC 🎉\",\"url\":\"https://github.com/SilvaTechB/silva-md-bot\",\"merchant_url\":\"https://github.com/SilvaTechB\"}"
                            }
                        ]
                    })
                })
            }
        }
    }, {})

    // Sending audio with image and context info
    await conn.sendMessage(m.chat, {
        audio: { url: 'https://github.com/SilvaTechB/silva-md-bot/raw/main/media/Menu.mp3' },
        image: { url: 'https://i.imgur.com/RDhF6iP.jpeg' }, // Change this to a dynamic thumbnail URL
        caption: str,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363398106360290@newsletter',
                newsletterName: '*𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥',
                serverMessageId: 143
            }
        }
    })

    await conn.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    })
}

handler.help = ['main']
handler.tags = ['group']
handler.command = ['menu', 'help', 'h', 'commands']

export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
    const time = moment.tz('Africa/Nairobi').format('HH')
    let res = "happy early in the day☀️"
    if (time >= 4) {
        res = "Good Morning 🥱"
    }
    if (time >= 10) {
        res = "Good Afternoon 🫠"
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇"
    }
    if (time >= 18) {
        res = "Good Night 🌙"
    }
    return res
}