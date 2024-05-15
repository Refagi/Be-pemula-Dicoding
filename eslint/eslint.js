/*
ia dapat membantu atau membimbing Anda untuk selalu menuliskan kode JavaScript dengan gaya yang konsisten. 
Seperti yang Anda tahu, JavaScript tidak memiliki aturan yang baku untuk gaya penulisan kode, 
bahkan penggunaan semicolon. Karena itu, terkadang kita jadi tidak konsisten dalam menuliskannya.

ESLint dapat mengevaluasi kode yang dituliskan berdasarkan aturan yang Anda terapkan. 
Anda bisa menuliskan aturannya secara mandiri atau menggunakan gaya penulisan yang sudah ada seperti 
-https://github.com/airbnb/javascript (AirBnb JavaScript Code Style), 
-https://google.github.io/styleguide/jsguide.html (Google JavaScript Code Style), dan 
-https://standardjs.com/ (StandardJS Code Style). 
Kami sarankan Anda untuk mengikuti salah satu code style yang ada. Mengapa begitu? 
Jawabannya karena code style tersebut sudah banyak digunakan oleh JavaScript Developer di luar sana.

Untuk menggunakan ESLint, pasanglah package ESLint pada devDependencies proyek Anda. 
Caranya, silakan eksekusi perintah berikut di Terminal:

npm install eslint --save-dev 


Sebelum digunakan, Anda perlu melakukan konfigurasi terlebih dahulu. Caranya dengan menggunakan 
perintah berikut di Terminal proyek.

npx eslint --init */


/*
Kemudian Anda akan diberikan beberapa pertanyaan, silakan jawab pertanyaan yang ada dengan jawaban berikut:

How would you like to use ESLint? -> To check, find problems, and enforce code style.
What type of modules does your project use? -> CommonJS (require/exports).
Which framework did you use? -> None of these. 
Does your project use TypeScript? -> N.
Where does your code run? -> Node (pilih menggunakan spasi).
How would you like to define a style for your project? -> Use a popular style guide.
Which style guide do you want to follow? -> (Anda bebas memilih, sebagai contoh pilih AirBnB).
What format do you want your config file to be in? -> JSON.
Would you like to …… (seluruh pertanyaan selanjutnya) -> Y.

Setelah menjawab seluruh pertanyaan yang diberikan, maka akan terbentuk berkas konfigurasi eslint dengan nama .eslintrc.json.


Setelah membuat konfigurasi ESLint, selanjutnya kita gunakan ESLint untuk memeriksa kode JavaScript 
yang ada pada proyek. Namun sebelum itu, kita perlu menambahkan npm runner berikut di dalam berkas package.json:

"scripts": {
  "start": "nodemon server.js",
  "lint": "eslint ./"
},


Jalankan perintah npm run lint pada Terminal proyek, lalu perhatikan hasilnya.

npm run lint

> notes-app-be@1.0.0 lint
> eslint ./


C:\Users\Reno Faza Givaro\OneDrive\Documents\Belajar-Be-Pemula-Dicoding\Backend-Pemula-Dicoding\notes-app-Be\server.js
  1:1   warning  Unexpected console statement                     no-console
  1:36  error    Expected linebreaks to be 'LF' but found 'CRLF'  linebreak-style

✖ 2 problems (1 error, 1 warning)
  1 error and 0 warnings potentially fixable with the `--fix` option.


kita dapat melihat terdapat eror dan warning (bila Anda menggunakan AirBnB code style). Seperti inilah fungsi 
dari ESLint, ia akan memberi tahu alasan dan letak kesalahan dalam penulisan kode. Tiap eror yang tampil, 
itu menandakan adanya penulisan kode yang tidak sesuai dengan style guide yang sudah kita tetapkan. 
Melalui ESLint ini, kita dapat mencari letak kesalahan secara akurat dan cepat.

ESLint dapat diintegrasikan dengan berbagai text editor, termasuk VSCode. Untuk mengaktifkan integrasi, 
Anda bisa menggunakan ekstensi ESLint untuk Visual Studio Code
*/
