import { Router } from 'express';
import {
  createBook,
  deleteBook,
  getBookById,
  getBooks,
} from '../controllers/bookController.js';

const bookRouter = Router();

bookRouter.get('/', getBooks);
bookRouter.get('/:id', getBookById);
bookRouter.post('/', createBook);
bookRouter.delete('/:id', deleteBook);

export default bookRouter;
