let books = [
  { id: '1', title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes' },
  { id: '2', title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
  { id: '3', title: '1984', author: 'George Orwell' },
];

async function getBooks() {
  return books;
}

async function getBookById(id) {
  return books.find((book) => book.id === id);
}

async function addBook(book) {
  books = books.concat(book);
  return book;
}

async function deleteBook(id) {
  books = books.filter((book) => book.id !== id);
}

function generateId() {
  const maxId = books.length > 0 ? Math.max(...books.map((b) => Number(b.id))) : 0;
  return String(maxId + 1);
}

export default { getBooks, getBookById, addBook, deleteBook, generateId };
