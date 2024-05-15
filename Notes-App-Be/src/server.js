/* eslint-disable no-unused-vars */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

// jalankan command ini untuk menjalankan newman(postman) setelah instal npm newman --g
/* newman run notes-api-test-postman_collection.json --environment notes-api-test-postman_environment.json */
