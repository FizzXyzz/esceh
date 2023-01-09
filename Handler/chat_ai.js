require('../next.js');
const { modul } = require('../module');
const { baileys, chalk, cheerio, child_process, crypto, fs, ffmpeg, jsobfus, moment, ms, speed, util } = modul;
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys');
const axios = require('axios');
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize, generateProfilePicture } = require('../lib/myfunc')

const ApikeyOpenAi = "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"
/*const ChatAIHandler = async (text, m, {conn} ) => {*/
	const ChatAIHandler = async (text, m, anjay ) => {
ppuser = 'https://raw.githubusercontent.com/JasRunJ/filenya/master/a4cab58929e036c18d659875d422244d.jpg'
ppnyauser = await reSize(ppuser, 200, 200)
const anjaaaaay = (teks) => {
 m.sendMessage(m.chat, { image: ppnyauser, caption: teks, contextInfo:{forwardingScore: 9999,isForwarded: true,"externalAdReply": {"title": `FizzxModss`,"body": ``,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://yandex.com`,
thumbnailUrl: 'https://telegra.ph/file/f75dc872e7ee995ab2b88.jpg', 
thumbnail: ppnyauser,
}
}}, { quoted: m})
}
    if (!text) throw 'Masukkan Query Link!'
    const question = `${text}`
    const response = await ChatGPTRequest(question)

    if (!response.success) {
        return anjaaaaay(response.success)
    }

    return anjaaaaay(response.data)
}


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
        });
}

module.exports = {
    ChatAIHandler
}