//GUA LEXXY SUKA SKR
//SIMPLE KEREN RAPIH
//CREATED BY LEXXY OFFICIAL

const fs = require('fs')

JSON_DATA = {
auto_downloadTT: JSON.parse(fs.readFileSync('./data_json/tiktokDown.json')),
}

exports.auto_downloadTT_JSON = JSON_DATA.auto_downloadTT;