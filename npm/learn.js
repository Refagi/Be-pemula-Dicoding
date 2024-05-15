const _ = require('lodash')// TODO
//module loadah untuk memanipulasi array, object, string, number dll
 
const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
 
console.log(myOddEvenArray);


/**Tugas Anda ialah:

Pasang package lodash pada proyek nodejs-basic.
Gunakan package lodash pada TODO sehingga index.js dapat dieksekusi dengan baik.

Bila Anda telah mengerjakan semuanya dengan benar, eksekusi berkas index.js dengan perintah:

node index.js 

output:
[ [ 1, 3, 5 ], [ 2, 4, 6 ] ]*/