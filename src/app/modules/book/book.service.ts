import { BookInterface } from './book.interface';
import { BookModel } from './book.model';

// Create book form DB
const createBookFromDB = (data: BookInterface) => {
  const result = BookModel.create(data);
  return result;
};
//Get all book from DB
const getAllBookFromDB = () => {
  const result = BookModel.find();
  return result;
};

export const BookService = {
  createBookFromDB,
  getAllBookFromDB,
};
