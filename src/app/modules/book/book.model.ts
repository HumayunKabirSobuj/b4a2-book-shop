import { model, Schema } from 'mongoose';
import { BookInterface } from './book.interface';

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [3, 'Title must be at least 3 characters'],
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    author: {
      type: String,
      required: [true, 'Author name is required'],
      minlength: [3, 'Author name must be at least 3 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be a positive number'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: {
        values: [
          'Fiction',
          'Science',
          'SelfDevelopment',
          'Poetry',
          'Religious',
        ],
        message:
          'Category must be one of: Fiction, Science, SelfDevelopment, Poetry, Religious',
      },
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      minlength: [10, 'Description must be at least 10 characters'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity cannot be negative'],
      validate: {
        validator: Number.isInteger,
        message: 'Quantity must be an integer',
      },
    },
    inStock: {
      type: Boolean,
      required: [true, 'In-stock status is required'],
    },
  },
  {
    timestamps: true,
  },
);
// create a model
export const BookModel = model<BookInterface>('book', bookSchema);
