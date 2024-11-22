import { Request, Response } from 'express';
import { BookService } from './book.service';

// Create Book From DB
const createBook = async (req: Request, res: Response) => {
  try {
    const { book: bookData } = req.body;
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

// Get All Book From DB
const getAllBook = async (req: Request, res: Response) => {
  try {
    const result = await BookService.getAllBookFromDB();
    res.status(200).json({
      success: true,
      message: 'Books retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Books cannot retrieved',
      error,
    });
  }
};

export const BookController = {
  createBook,
  getAllBook,
};
