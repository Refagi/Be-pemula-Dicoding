const initialMemoryUsage = 3458472 // TODO 1 
const yourName = process.argv[2]// TODO 2
const environment = 'production' // TODO 3
 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}
 
const currentMemoryUsage =  3466864// TODO 4
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

/**Selesaikan kode yang ditandai TODO dengan ketentuan berikut:

TODO 1 : Isi dengan nilai heapUsed dari instance process.memoryUsage.
TODO 2 : Isi dengan nilai index ke-2 dari process.argv.
TODO 3 : Isi dengan nilai NODE_ENV dari process.env.
TODO 4 : Isi dengan nilai heapUsed dari instance process.memoryUsage.

Setelah mengerjakan seluruh TODO, eksekusi berkas JavaScript dengan perintah: 

$env:NODE_ENV="development"; node ./process-object/index.js <Nama Anda> 

atau jalankan ini
node index.js "brongz"

Hai, brongz
Mode environment: production
Penggunaan memori dari 3458472 naik ke 3466864
*/
