/*Pada Node.js, global objek process memiliki fungsi dan properti yang dapat memberikan informasi mengenai 
proses yang sedang berjalan.

Salah satu yang sering digunakan adalah properti process.env. Melalui properti ini kita dapat menyimpan 
nilai atau mendapatkan informasi mengenai environment yang digunakan selama proses sedang berlangsung. 
Contoh, process.env memiliki properti process.env.PWD yang menyediakan informasi mengenai lokasi di mana 
proses dijalankan; properti process.env.USER menyimpan informasi nama user pada komputer Anda; 
dan masih banyak properti lainnya. Anda bisa lihat daftar lengkap properti yang ada pada halaman 
dokumentasi Node.js mengenai process.env.

Anda juga bisa secara manual menyimpan nilai di dalam process.env. Hal ini berguna untuk menentukan alur 
code seperti if-else dalam program berdasarkan environment yang Anda berikan. Contohnya, ketika Anda ingin 
nilai variabel host berbeda di kala pengembangan (development) dan produksi (production), Anda bisa membuat 
properti NODE_ENV pada process.env. Jadi, Anda bisa menentukan nilai host berdasarkan kondisi NODE_ENV.
*/

//intsall dulu modul @hapi untuk menjalankannya
// const Hapi = require('@hapi/hapi');
// const init = async () => {
//     const server = Hapi.server({
//         port: 3000,
//         host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
//     });
//     await server.start();
//     console.log(`Server berjalan pada ${server.info.uri}`);
// };
// init();


/**Untuk memberikan nilai pada properti process.env, kita dapat memberikannya ketika mengeksekusi berkas 
 * JavaScript. Caranya seperti ini: */

// SET NODE_ENV=production && node process.env.js

/*Selain untuk menetapkan dan mendapatkan informasi mengenai environment, objek process memiliki kegunaan lain. 
Salah satunya adalah mendapatkan informasi tentang penggunaan memory ketika proses berjalan. Anda dapat 
mengakses informasi tersebut melalui fungsi process.memoryUsage().*/

const memoryInformation = process.memoryUsage();
 
console.log(memoryInformation);
 
/* output
{
  rss: 14569472,
  heapTotal: 2654208,
  heapUsed: 1788896,
  external: 855681,
  arrayBuffers: 9898
}
*/



/*Yang terakhir dan tak kalah pentingnya adalah properti process.argv. Properti ini dapat menampung nilai baris 
perintah dalam bentuk array ketika menjalankan proses. Contoh jika kita menjalankan baris perintah berikut:

node app.js "harry" "potter"
Maka array process.argv akan bernilai:

Elemen pertama : Alamat (path) lengkap dari lokasi node yang menjalankan prosesnya. 
Element kedua : Alamat (path) berkas JavaScript yang dieksekusi (app.js)
Element ketiga : “harry”
Element keempat : “potter”*/

const cekProcess = process.argv
const firstName = process.argv[2];
const lastName = process.argv[3];
 
console.log(cekProcess)
console.log(`Hello ${firstName} ${lastName}`);