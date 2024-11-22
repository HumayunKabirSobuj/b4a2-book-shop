import express from 'express';
import { BookController } from './book.controller';

const BookRouter = express.Router();

BookRouter.get('/:id', BookController.getSingleBook);
BookRouter.post('/', BookController.createBook);
BookRouter.get('/', BookController.getAllBook);
BookRouter.put('/:id', BookController.updateABook);
BookRouter.delete('/:id', BookController.deleteABook);

export default BookRouter;
