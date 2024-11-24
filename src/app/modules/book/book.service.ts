import { BookInterface } from './book.interface';
import { BookModel } from './book.model';

// Create book form DB
const createBookFromDB = (data: BookInterface) => {
  const result = BookModel.create(data);
  return result;
};
//Get all book from DB
const getAllBookFromDB = (queryData: string) => {
  // console.log(queryData)
  const query = queryData
    ? {
        $or: [
          { category: queryData },
          { title: queryData },
          { author: queryData },
        ],
      }
    : {};

  const result = BookModel.find(query);
  return result;
};
//Get single book form DD
const getSingleBookFromDB = (id: string) => {
  const result = BookModel.findById(id);
  return result;
};

// Delete book from DB
const deleteABookFromDB = (id: string) => {
  const result = BookModel.findByIdAndDelete(id);
  return result;
};
// Update a book from DB
const updateABookFromDB = (id: string, data: BookInterface) => {
  const result = BookModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

export const BookService = {
  createBookFromDB,
  getAllBookFromDB,
  getSingleBookFromDB,
  deleteABookFromDB,
  updateABookFromDB,
};
