/**Node Package Manager (NPM) merupakan pengelola package untuk JavaScript yang dapat memudahkan kita 
dalam mengelola package yang tersedia pada https://www.npmjs.com/. 
NPM merupakan standard package manager yang disediakan oleh Node.js dan sudah otomatis terpasang 
ketika memasang Node.js pada komputer kita. NPM dapat dioperasikan melalui CMD atau Terminal 


Selain untuk membuat proyek JavaScript, NPM dapat digunakan untuk memasang atau menghapus third party 
module (modul pihak ketiga). Modul yang dipasang melalui NPM akan disimpan pada folder node_modules.

Terdapat dua tipe pemasangan modul melalui NPM: yakni global dan lokal. Bila modul dipasang secara global, 
maka modul tersebut akan bersifat layaknya core module dan dapat digunakan di mana pun. Sedangkan modul 
yang dipasang secara lokal hanya dapat digunakan pada cakupan project Node.js yang memasangnya saja.

Namun saat ini, kami sangat menyarankan Anda untuk memasang modul pihak ketiga secara lokal saja. 
Hindari pemasangan modul secara global karena akan menyebabkan banyak masalah. 
Sebaiknya gunakan npx bila Anda ingin menjalankan Node.js package di mana pun Anda inginkan.*/

/**
 * jalankan: npm install <nama modul / library> , untuk install module / library
 * jalankan: npm uninstall <nama modul / library> , untuk menghapus
 * 
 * Package yang dipasang secara lokal melalui NPM akan tercatat di dalam berkas package.json, 
 * lebih tepatnya pada objek dependencies.

{
  "name": "nodejs-basic",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.29.4"
  }
} 


Ini menunjukkan bahwa proyek Node.js Anda memiliki ketergantungan atau dependencies terhadap module 
moment. Informasi ini berguna bila Anda hendak membagikan proyek Node.js ke orang lain. 
Mereka akan mengetahui modul pihak ketiga apa yang akan diinstal ketika memasang proyek Anda melalui 
perintah npm install.*/


/**Terakhir, NPM juga bisa berfungsi sebagai runner script. Ia dapat menjalankan script yang dituliskan 
 * pada objek scripts yang ada di berkas package.json. Dengan menetapkan script pada package.json, 
 * Anda dapat membuat jalan pintas untuk menjalankan Node.js process. Selain itu, Anda bisa membuat 
 * lebih dari satu script sesuai dengan environment yang Anda inginkan 
 * 
 * 
 * "scripts": {
    "start-dev": "NODE_ENV=development node app.js",
    "start": "NODE_ENV=production node app.js"
  }
  
  jalankan: npm run start-dev
*/
