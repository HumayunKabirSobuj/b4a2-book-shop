import { BookInterface } from './book.interface';
import { BookModel } from './book.model';

const createBookFromDB = (data: BookInterface) => {
  const result = BookModel.create(data);
  return result;
};

export const BookService ={
    createBookFromDB
}
