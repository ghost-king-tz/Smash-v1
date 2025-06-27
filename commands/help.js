const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╭═══〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍
┃✰│━━━❮❮ CMD LINE ❯❯━━━━━━
┃✰│𝙽𝚊𝚖𝚎: I'M LOFT
┃✰│𝚃𝚘𝚝𝚊𝚕: 700+ Features
┃✰│Network:LTE
┃✰│ᴠᴇʀꜱɪᴏɴ: BETA
┃✰│ᴏᴡɴᴇʀ : Sir loft
┃✰│ɴᴜᴍʙᴇʀ: 255778018545
┃✰│HOSTER: *loft Platform*
┃✰│ᴍᴏᴅᴇ: *Unkown*
┃✰│ᴘʀᴇғɪx: *Multi-Prefix*
┃✰│Uptime: 18:30
┃✰│Today's Date: 23,10,2006
┃✰│Current Time: unknown 
┃✰│──────────●●►
┃✰│𝕏 https://x.com/@loft
┃✰│   ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃✰│   ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃✰│   ©*𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥
╰──────────────────
*Available Commands:*

═══〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍
🛡️ *𝗚𝗘𝗡𝗘𝗥𝗔𝗟 𝗖𝗢𝗠𝗠𝗔𝗡𝗗* 🛡️:
║ 💥 .help or .menu
║ 💥 .ping
║ 💥 .alive
║ 💥 .tts <text>
║ 💥 .owner
║ 💥 .joke
║ 💥 .quote
║ 💥 .fact
║ 💥 .weather <city>
║ 💥 .news
║ 💥 .attp <text>
║ 💥 .lyrics <song_title>
║ 💥 .8ball <question>
║ 💥 .groupinfo
║ 💥 .staff or .admins 
║ 💥 .vv
║ 💥 .trt <text> <lang>
║ 💥 .ss <link>
║ 💥 .jid
╚═════〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍

╔════〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍
⚙️ 𝘼𝘿𝙈𝙄𝙉 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 ⚙️:
║ 🩸 .ban @user
║ 🩸 .promote @user
║ 🩸 .demote @user
║ 🩸 .mute <minutes>
║ 🩸 .unmute
║ 🩸 .delete or .del
║ 🩸 .kick @user
║ 🩸 .warnings @user
║ 🩸 .warn @user
║ 🩸 .antilink
║ 🩸 .antibadword
║ 🩸 .clear
║ 🩸 .tag <message>
║ 🩸 .tagall
║ 🩸 .chatbot
║ 🩸 .resetlink
║ 🩸 .welcome <on/off>
║ 🩸 .goodbye <on/off>
╚═══〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍

╔════〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍
👑 𝙊𝙒𝙉𝙀𝙍 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 👑:
║ 🌹 .mode
║ 🌹 .autostatus
║ 🌹 .clearsession
║ 🌹 .antidelete
║ 🌹 .cleartmp
║ 🌹 .setpp <reply to image>
║ 🌹 .autoreact
╚════〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍

╔═══〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍
🎨 𝙄𝙈𝘼𝙂𝙀/𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 🎨:
║ 💀 .blur <image>
║ 💀 .simage <reply to sticker>
║ 💀 .sticker <reply to image>
║ 💀 .tgsticker <Link>
║ 💀 .meme
║ 💀 .take <packname> 
║ 💀 .emojimix <emj1>+<emj2>
╚════〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍  

╔════〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍
🎮⚡ 𝙂𝘼𝙈𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 ⚡🎮:
║ 🫦 .tictactoe @user
║ 🫦 .hangman
║ 🫦 .guess <letter>
║ 🫦 .trivia
║ 🫦 .answer <answer>
║ 🫦 .truth
║ 🫦 .dare
╚═════〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍

╔═════〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍
🤖 *AI Commands*:
║ 🦾 .gpt <question>
║ 🦾 .gemini <question>
║ 🦾 .imagine <prompt>
║ 🦾 .flux <prompt>
╚════〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍

╔════〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍
🎯 *Fun Commands*:
║ 🤭 .compliment @user
║ 🤭 .insult @user
║ 🤭 .flirt 
║ 🤭 .shayari
║ 🤭 .goodnight
║ 🤭 .roseday
║ 🤭 .character @user
║ 🤭 .wasted @user
║ 🤭 .ship @user
║ 🤭 .simp @user
║ 🤭 .stupid @user [text]
╚═════〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍

╔════〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍
🔤 *Textmaker*:
║ 🤬 .metallic <text>
║ 🤬 .ice <text>
║ 🤬 .snow <text>
║ 🤬 .impressive <text>
║ 🤬 .matrix <text>
║ 🤬 .light <text>
║ 🤬 .neon <text>
║ 🤬 .devil <text>
║ 🤬 .purple <text>
║ 🤬 .thunder <text>
║ 🤬 .leaves <text>
║ 🤬 .1917 <text>
║ 🤬 .arena <text>
║ 🤬 .hacker <text>
║ 🤬 .sand <text>
║ 🤬 .blackpink <text>
║ 🤬 .glitch <text>
║ 🤬 .fire <text>
╚════〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍

╔════〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍
📥 *Downloader*:
║ 👻 .play <song_name>
║ 👻 .song <song_name>
║ 👻 .instagram <link>
║ 👻 .facebook <link>
║ 👻 .tiktok <link>
║ 👻 .video <song name>
║ 👻 .ytmp4 <Link>
╚════〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍

╔════〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍
💻 *Github Commands:*
║ 🥵 .git
║ 🥵 .github
║ 🥵 .sc
║ 🥵 .script
║ 🥵 .repo
╚═════〘 *𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 〙═══⊷❍

Join our channel for updates:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_images.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398106360290@newsletter',
                        newsletterName: 'smash',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398106360290@newsletter',
                        newsletterName: 'smash',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
