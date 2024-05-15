const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Homepage";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method";
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Halaman tidak ditemukan";
    },
  },
  {
    //penggunaan ?, agar saat path di akses tidak error, dan mengembalikan nilai default "stranger"
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { name = "stranger" } = request.params;

      //dengan query params 
      const { lang } = request.query;

      if (lang === "id") {
        return `Hai, ${name}!`;
      }
      return `Hello, ${name}!`;
    },
  },
];

module.exports = routes;

/*
properti method memiliki nilai ‘*’, itu artinya route dapat diakses menggunakan seluruh method yang ada 
pada HTTP. 

Kemudian nilai ‘/{any*}’ pada route paling akhir, ini berfungsi untuk menangani permintaan masuk pada 
path yang belum Anda tentukan. 
Ini merupakan salah satu teknik dalam menetapkan routing yang dinamis menggunakan Hapi.

Namun, routing dengan nilai dinamis seperti itu akan kalah kuatnya dengan nilai yang 
ditetapkan secara spesifik */

//ooutput di cmd
/*
curl -X GET http://localhost:5000
// output: Homepage
curl -X GET http://localhost:5000/about
// output: About page
curl -X GET http://localhost:5000/test
// output: Halaman tidak ditemukan
curl -X POST http://localhost:5000
// output: Halaman tidak dapat diakses dengan method tersebut 

curl -X GET http://localhost:5000/hello/dicoding
// output: Hello, dicoding!
curl -X GET http://localhost:5000/hello
// output: Hello, stranger!

//dengan query params
curl -X GET http://localhost:5000/hello/dicoding?lang=id
// output: Hai, dicoding!
curl -X GET http://localhost:5000/hello/dicoding
// output: Hello, dicoding! */
