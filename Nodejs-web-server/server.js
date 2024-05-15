/*
bagaimana caranya agar server selalu sedia menangani permintaan yang masuk? Setiap instance dari http.server juga 
memiliki method listen(). Method inilah yang membuat http.server selalu standby untuk menangani permintaan yang 
masuk dari client. Setiap kali ada permintaan yang masuk, request listener akan tereksekusi.

Method listen() dapat menerima 4 parameter, berikut detailnya:

port (number) : jalur yang digunakan untuk mengakses HTTP server.
hostname (string) : nama domain yang digunakan oleh HTTP server.
backlog (number) : maksimal koneksi yang dapat ditunda (pending) pada HTTP server.
listeningListener (function) : callback yang akan terpanggil ketika HTTP server sedang bekerja (listening). */

const http = require("http");

const requestListener = (request, response) => {

  //Response Header
  //Explore: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
  // response.setHeader("Content-Type", "text/html"); 
  response.setHeader("Content-Type", "application/ld+json");
  response.setHeader('Powered-By', 'Node.js');

  response.statusCode = 200;

  //menggunakan method/verb req
  const { method, url } = request;

  if (url === "/") {
    if (method === "GET") {
      response.statusCode = 200
      // response.end("<h1>Ini adalah homepage</h1>");
      response.end(JSON.stringify({message: "Ini adalah homepagae"})) //ubah format response body jadi Json
    } else {
      response.statusCode = 400
      // response.end(
      //   `<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`
      // );
      response.end(JSON.stringify({message: `Halaman tidak dapat diakses dengan ${method} request`}))
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.statusCode = 200
      // response.end("<h1>Halo! Ini adalah halaman about</h1>");
      response.end(JSON.stringify({message: "Halo! Ini adalah halaman about"}))
    } else if (method === "POST") {
      //menggunakan method body
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.statusCode = 200
        // response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
        response.end(JSON.stringify({message: `Halo, ${name}! Ini adalah halaman about`}))
      });
    } else {
      response. statusCode = 400
      // response.end(
      //   `<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`
      // );
      response.end(JSON.stringify({message: `Halaman tidak dapat diakses menggunakan ${method} request`}))
    }
  } else {
    response.statusCode = 404
    // response.end("<h1>Halaman tidak ditemukan!</h1>");
    response.end(JSON.stringify({message: "Halaman tidak ditemukan!"}))
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});


//gunakan command ini di cmd saat menggunakan body req
//curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Dicoding\"}"

//gunakan command ini di cmd saat menggunakan method/verb req
/*
curl -X GET http://localhost:5000/about
// output: <h1>Halo! Ini adalah halaman about</h1>
curl -X POST -H "Content-Type: application/json" http://localhost:5000/about -d "{\"name\": \"Dicoding\"}"
// output: <h1>Halo, Dicoding! Ini adalah halaman about</h1>
curl -X PUT http://localhost:5000/about
// output: <h1>Halaman tidak dapat diakses menggunakan PUT request</h1>
curl -X DELETE http://localhost:5000/about
// output: <h1>Halaman tidak dapat diakses menggunakan DELETE request</h1> */


//gunakan command ini untuk melihat status code 
/*
curl -X GET http://localhost:5000/about -i
 
curl -X GET http://localhost:5000/test -i
 
curl -X DELETE http://localhost:5000/ -i */

