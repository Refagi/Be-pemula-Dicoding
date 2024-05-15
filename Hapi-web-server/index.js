/*
//menggunakan payload untuk mendapatkan data json
/*
server.route({
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
        const { username, password } = request.payload;
        return `Welcome ${username}!`;
    },
}); 

Kapan pun client mengirimkan payload berupa JSON, payload tersebut dapat diakses pada route 
handler melalui properti request.payload 

Pada contoh di atas, handler menerima payload melalui request.payload. Dalam kasus tersebut, 
client mengirimkan data login dengan struktur:

{ "username": "harrypotter", "password": "encryptedpassword" }
*/



/*
response toolkit (mirip seperti response di node js / express) 

server.route({
    method: 'POST',
    path: '/user',
    handler: (request, h) => {
        return h.response('created').code(201);
    },
});


// Detailed notation
const handler = (request, h) => {
    const response = h.response('success');
    response.type('text/plain');
    response.header('Custom-Header', 'some-value');
    return response;
};
 
// Chained notation
const handler = (request, h) => {
    return h.response('success')
        .type('text/plain')
        .header('Custom-Header', 'some-value');
};*/
