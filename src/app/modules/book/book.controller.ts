import { Request, Response } from 'express';
import { BookService } from './book.service';

const createBook = async (req: Request, res: Response) => {
  try {
    const {book:bookData} = req.body;
    // console.log(bookData);
    const result = await BookService.createBookFromDB(bookData);
    res.status(200).json({
      success: true,
      message: 'Book created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Book Cannot Create',
      error,
    });
  }
};

export const BookController = {
  createBook,
};
