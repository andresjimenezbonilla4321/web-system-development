import db from '../db.js';

export async function getBooks(request, response) {
  try {
    const books = await db.getBooks();
    response.json(books);
  } catch (err) {
    console.error(err);
    response.status(500).json({ error: 'Internal server error' });
  }
}

export async function getBookById(request, response) {
  try {
    const id = request.params.id;
    const book = await db.getBookById(id);
    if (!book) {
      return response.status(404).json({ error: 'book not found' });
    }
    response.json(book);
  } catch (err) {
    console.error(err);
    response.status(500).json({ error: 'Internal server error' });
  }
}

export async function createBook(request, response) {
  try {
    const body = request.body;
    if (!body || !body.title) {
      return response.status(400).json({ error: 'title missing' });
    }
    if (!body.author) {
      return response.status(400).json({ error: 'author missing' });
    }
    const book = {
      title: body.title,
      author: body.author,
      id: db.generateId(),
    };
    await db.addBook(book);
    response.status(201).json(book);
  } catch (err) {
    console.error(err);
    response.status(500).json({ error: 'Internal server error' });
  }
}

export async function deleteBook(request, response) {
  try {
    const id = request.params.id;
    const book = await db.getBookById(id);
    if (!book) {
      return response.status(404).json({ error: 'book not found' });
    }
    await db.deleteBook(id);
    response.status(204).end();
  } catch (err) {
    console.error(err);
    response.status(500).json({ error: 'Internal server error' });
  }
}
