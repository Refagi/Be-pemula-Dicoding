const bookService = require('./books-service');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: bookService.createBooks,
  },
  {
    method: 'GET',
    path: '/books',
    handler: bookService.getBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}', //'/books/{id}' agar sesuai dengan yang ada di data yaitu mennguanakn id bukan {bookId}
    handler: bookService.getBookById,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: bookService.updateBook,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: bookService.deletedBookById,
  },
];

module.exports = routes;