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
//Get single book form Db
const getSingleBook = (id: string) => {
  const result = BookModel.findById(id);
  return result;
};
export const BookService = {
  createBookFromDB,
  getAllBookFromDB,
  getSingleBook,
};
