const { customAlphabet } = require('nanoid');
const books = require('./books');

const createBooks = (request, h) => {
  const { payload } = request;
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished = false,
  } = payload;

  const nanoid = customAlphabet('1234567890abcdef', 10);
  const id = nanoid(16);

  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const dataBooks = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  if (dataBooks.readPage === dataBooks.pageCount) {
    dataBooks.finished = true;
  } else if (dataBooks.readPage > dataBooks.pageCount) {
    const response = h.response({
      status: 'fail',
      message:
        'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  } else if (dataBooks.name === undefined || dataBooks.name === '') {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  }

  books.push(dataBooks);

  const resultBooks = books.filter((book) => { return book.id === id; }).length > 0;

  if (resultBooks) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: { bookId: id },
    });
    response.code(201);
    return response;
  }
};

const getBooks = (request, h) => {
  const { name = '', reading, finished } = request.query;

  let searchQueryBook = books;
  if (name !== undefined || name !== '') {
    const ignoreCaseName = name.toLowerCase();
    searchQueryBook = books.filter((book) => { return book.name?.toLowerCase().includes(ignoreCaseName); });
  }

  if (reading !== undefined) {
    const parseReading = parseInt(reading);
    searchQueryBook = books.filter((book) => { return book.reading === Boolean(parseReading); });
  }

  if (finished !== undefined) {
    const parseFinished = parseInt(finished);
    searchQueryBook = books.filter((book) => { return book.finished === Boolean(parseFinished); });
  }

  const dataBook = searchQueryBook.map((book) => {
    return {
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    };
  });

  const response = h.response({
    status: 'success',
    data: { books: dataBook },
  });
  response.code(200);
  return response;
};

const getBookById = (request, h) => {
  const { bookId } = request.params;
  const getBook = books.filter((book) => { return book.id === bookId; })[0];

  if (getBook !== undefined) {
    const response = h.response({
      status: 'success',
      data: { book: getBook },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

const updateBook = (request, h) => {
  const { bookId } = request.params;
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  const searchBook = books.findIndex((book) => { return book.id === bookId; });
  const updatedAt = new Date().toISOString();

  if (!name || name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  }

  if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message:
        'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  }

  if (searchBook !== -1) {
    books[searchBook] = {
      ...books[searchBook],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

const deletedBookById = (request, h) => {
  const { bookId } = request.params;

  const searchBook = books.findIndex((book) => { return book.id === bookId; });
  const deleted = books.splice(searchBook, 1);

  if (searchBook !== -1) {
    deleted;
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  createBooks,
  getBooks,
  getBookById,
  updateBook,
  deletedBookById,
};
