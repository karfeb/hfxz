/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Free Apikey By Sonel S
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore', 
}

// Other
global.owner = ['6287864598751'] // Owner Number
global.premium = ['6287864598751'] // Owner Number
global.packname = 'Hfxz' // Bot Name
global.author = 'Eksa' // Owner Name
global.sessionName = 'session' // Dont Change 
global.prefa = ['','!','.','🐦','🐤','🗿'] // Dont Change
global.sp = '⭔'
global.mess = {      // Reply Message 
    success: 'Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Waiting...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 30
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
