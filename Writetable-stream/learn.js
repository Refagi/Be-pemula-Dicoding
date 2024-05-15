/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

/*
-Teks yang dibaca oleh readable stream memiliki ukuran 15 karakter tiap bagiannya. Tentukan nilai highWaterMark-nya.
-Tulis ulang teks dengan menggunakan teknik writable stream pada berkas output.txt. Untuk tiap bagian teks yang dibaca melalui readable stream, 
pisahkan dengan baris baru (‘\n’). */

const fs = require('fs');
 
const readableStream = fs.createReadStream('./input.txt', {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream('output.txt');

 
// readableStream.on('readable', () => {
//     try {
//         process.stdout.write(`[${readableStream.read()}]`);
//     } catch(error) {
//         console.log(error)
//         // catch the error when the chunk cannot be read.
//     }
// });

readableStream.on('data', (text) => {
    try {
        writableStream.write(text + '\n')
    } catch(error){
        console.log(error)
        console.log('text tidak terbca')
    }
})


readableStream.on('end', () => {
    console.log('Done');
});

readableStream.on('end', () => {
    writableStream.end();
})

//output:
// akan membuat file output.txt jika belum ada, lalau berisi text yang ada di file input.txt