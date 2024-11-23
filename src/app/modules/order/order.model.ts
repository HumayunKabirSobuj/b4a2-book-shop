import { model, Schema } from 'mongoose';
import { orderInterface } from './order.interface';

const orderSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (value: string) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: '{VALUE} is not a valid email .',
      },
      trim: true,
    },
    product: {
      type: String,
      trim: true,
      required: [true, 'Product is Required'],
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
    totalPrice: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be a positive number'],
    },
  },
  {
    timestamps: true,
  },
);

export const orderModel = model<orderInterface>('order', orderSchema);
