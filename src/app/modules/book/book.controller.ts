import { Request, Response } from 'express';
import { BookService } from './book.service';

// Create Book From DB
const createBook = async (req: Request, res: Response) => {
  try {
    const bookData = req.body;
    const result = await BookService.createBookFromDB(bookData);
    res.status(200).json({
      success: true,
      message: 'Book created successfully',
      data: result,
    });
  } catch (error) {
    res.status(404).json({
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
    res.status(404).json({
      success: false,
      message: 'Books cannot retrieved',
      error,
    });
  }
};

//Get single book from DB
const getSingleBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await BookService.getSingleBookFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Book retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Book cannot retrieved',
      error,
    });
  }
};

//Delete a book from DB
const deleteABook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await BookService.deleteABookFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Book deleted successfully',
      data: {},
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Book cannot deleted',
      error,
    });
  }
};

//Update a book from DB
const updateABook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const bookData = req.body;
    const result = await BookService.updateABookFromDB(id, bookData);
    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Book cannot updated',
      error,
    });
  }
};

export const BookController = {
  createBook,
  getAllBook,
  getSingleBook,
  deleteABook,
  updateABook,
};
