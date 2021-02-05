const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot is an open-source program (free) written using Javascript, you can use, copy, modify, combine, publish, distribute, sub-license, and or sell copies without removing the main author of the source code / bot.

By using this source code / bot, you agree to the following Terms and Conditions:
- Source code / bot does not store your data on our servers.
- Source code / bot is not responsible for your orders to this bot.
- You can see the source code / bot at https://github.com/ArugaZ/whatsapp-bot

Instagram: https://instagram.com/ini.arga/

Best regards, ArugaZ.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Here are some of the features of this bot! ✨

Creator:

-❥ *${prefix}cooltext*
-❥ *${prefix}logopornhub*
-❥ *${prefix}sticker*
-❥ *${prefix}stickergif*
-❥ *${prefix}stickergiphy*
-❥ *${prefix}meme*
-❥ *${prefix}quotemaker*
-❥ *${prefix}nulis*

18+:
-❥ *${prefix}nekopoi*

Fun Menu (Group):
-❥ *${prefix}simisimi*
-❥ *${prefix}katakasar*
	┷-❥ *${prefix}klasmen*

Download:
-❥ *${prefix}ytmp3*
-❥ *${prefix}ytmp4*
-❥ *${prefix}facebook*

Horoscope:
-❥ *${prefix}cekzodiak*
-❥ *${prefix}artinama*
-❥ *${prefix}cekjodoh*

Search Any:
-❥ *${prefix}dewabatch*
-❥ *${prefix}images*
-❥ *${prefix}sreddit*
-❥ *${prefix}resep*
-❥ *${prefix}stalk*
-❥ *${prefix}wiki*
-❥ *${prefix}cuaca*
-❥ *${prefix}chord*
-❥ *${prefix}lyrics*
-❥ *${prefix}ss*
-❥ *${prefix}play*
-❥ *${prefix}movie*
-❥ *${prefix}whatanime*


Random Images:
-❥ *${prefix}anime*
-❥ *${prefix}kpop*
-❥ *${prefix}memes*

Etc:
-❥ *${prefix}tts*
-❥ *${prefix}translate*
-❥ *${prefix}resi*
-❥ *${prefix}covidindo*
-❥ *${prefix}ceklokasi*
-❥ *${prefix}shortlink*
-❥ *${prefix}bapakfont*
-❥ *${prefix}hilihfont*
-❥ *${prefix}grouplink*
-❥ *${prefix}revoke*

About Bot:
-❥ *${prefix}tnc*
-❥ *${prefix}donasi*
-❥ *${prefix}botstat*
-❥ *${prefix}ownerbot*
-❥ *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Owner Bot:
-❥ *${prefix}ban* - banned
-❥ *${prefix}bc* - promotion
-❥ *${prefix}leaveall* - exit all groups
-❥ *${prefix}clearall* - delete all chats

Hope you have a great day!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Here are the group admin features of this bot!

-❥ *${prefix}add*
-❥ *${prefix}kick* @tag
-❥ *${prefix}promote* @tag
-❥ *${prefix}demote* @tag
-❥ *${prefix}mutegrup*
-❥ *${prefix}tagall*
-❥ *${prefix}setprofile*
-❥ *${prefix}del*
-❥ *${prefix}welcome*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Here are the group owner features on this bot!
-❥ *${prefix}kickall*
*Owner Group is a group creator.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hi, thanks for using this bot, to support this bot you can help by donating by:

https://trakteer.id/arugabot

Pray that the bot project will continue to grow
Pray for more creative ideas for the bot author

The donation will be used for the development and operation of this bot.

Thank you. -ArugaZ`
}
