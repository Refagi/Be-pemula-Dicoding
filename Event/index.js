/**Aplikasi Node.js biasanya dikenal memiliki pola event-driven atau memiliki alur berdasarkan suatu 
 * kejadian. Apa maksudnya itu? Mari kita jelajahi lebih dalam lagi. 
 * 
 * 
programming dilakukan dengan cara yang imperatif. Agar komputer dapat melakukan sesuatu hal, 
kita perlu banyak menuliskan instruksi secara runtut beserta langkah-langkahnya. 
Komputer akan membaca kode dari atas ke bawah sesuai dengan urutan yang kita definisikan.
Dengan pola yang kaku seperti itu, kita akan sulit membangun program yang dapat menangani suatu kejadian. Karena kita saja tidak tahu kapan suatu kejadian akan terjadi, lantas bagaimana cara memberikan instruksi pada komputer? Lalu bagaimana solusinya? Berkaca dari dunia nyata, program komputer juga harus bekerja dengan pola event-driven. Syukurlah dengan Node.js kita dapat menerapkan pola tersebut dengan mudah.

Node.js menyediakan EventEmitter class yang merupakan member events core module:

const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();*/

/**Setiap instance dari EventEmitter akan memiliki fungsi on. Pada fungsi tersebut, 
 * kita dapat menentukan aksi berdasarkan sebuah kejadian. Contohnya seperti ini:*/

// const { EventEmitter } = require('events');
 
// const myEventEmitter = new EventEmitter();
 
// // fungsi yang akan dijalankan ketika event coffee-order terjadi
// const makeCoffee = ({ name }) => {
//     console.log(`Kopi ${name} telah dibuat!`);
// };
 
// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on('coffee-order', makeCoffee); 

/**Fungsi on menerima dua buah argumen, yang pertama adalah nama event dan yang kedua adalah listener 
 * atau fungsi yang akan dieksekusi ketika event terjadi. Dari kode di atas, 
 * jika terjadi event ‘coffee-order’, maka fungsi makeCoffee akan dijalankan. */


/**Lantas bagaimana cara membangkitkan suatu event? Setiap instance dari EventEmitter juga memiliki 
 * fungsi emit() yang berguna untuk membangkitkan event. 
 * 
Fungsi emit() menerima nilai argumen sebanyak apa pun yang Anda mau, namun nilai yang pertama merupakan 
nama dari event yang akan dibangkitkan, argumen kedua dan seterusnya adalah nilai yang akan digunakan 
untuk menjadi dari parameter fungsi listener.

Anda juga bisa mendaftarkan lebih dari satu fungsi listener pada sebuah event menggunakan fungsi on.*/

const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};
 
const makeBill = ({ price }) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}
 
myEventEmitter.on('coffee-order', makeCoffee);
myEventEmitter.on('coffee-order', makeBill);
 
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });
 
/**
 * output:
 * Kopi Tubruk telah dibuat!
 * Bill sebesar 15000 telah dibuat!
 */

//Atau bisa membuat satu fungsi khusus untuk menangani event. 
//Biasanya fungsi ini memiliki nama ‘handler’ atau ‘listener’ pada akhir penamaanya.


// const { EventEmitter } = require('events');
 
// const myEventEmitter = new EventEmitter();
 
// const makeCoffee = (name) => {
//     console.log(`Kopi ${name} telah dibuat!`);
// };
 
// const makeBill = (price) => {
//     console.log(`Bill sebesar ${price} telah dibuat!`);
// }
 
const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}
 
myEventEmitter.on('coffee-order', onCoffeeOrderedListener);
 
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });
 
/**
 * output:
 * Kopi Tubruk telah dibuat!
 * Bill sebesar 15000 telah dibuat!
 */
