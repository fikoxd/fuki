const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6283110933360@s.whatsapp.net"]
global.nomerOwner = "6283110933360"
global.nomorOwner = ['6283820352529']
global.namaDeveloper = "*𝐹𝐼𝒦𝒪𝒳𝒟* "
global.namaBot = "bot stor3"
global.packname = ""
global.author = "*𝐹𝐼𝒦𝒪𝒳𝒟* "
global.thumb = fs.readFileSync("./thumb.png")
global.tekspushkon = ""
global.tekspushkonv1 = "Assalamualaikum,  Save FIKOXD Kak/nSaveBack Sebut Nama Ya Kak 😁"
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By IrulLz Dev (Gausah Di Ganti Hargai Gua!!)
Di Jalankan Dan Di Fix Oleh IrulLz Dev & Namamu
Ubah Nomor Owner?
Ganti Di File ./owner.json

*/