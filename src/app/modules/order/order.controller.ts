import { Request, Response } from 'express';
import { BookModel } from '../book/book.model';
import { orderService } from './order.service';

const orderABook = async (req: Request, res: Response) => {
  try {
    const data = req.body.order;
    const { email, product, quantity ,totalPrice} = data;
    const findBook = await BookModel.findById(data.product);

    if (!findBook) {
      return res.status(404).json({
        success: false,
        message: 'Book Not Found',
      });
    }

    if (data.quantity > findBook.quantity) {
      return res.status(400).json({
        success: false,
        message: 'Insufficient stock',
        error: 'Validation Error',
      });
    }
    // const totalPrice = findBook.price * data.quantity;
    const order = {
      email,
      product,
      quantity,
      totalPrice,
    };

    const result = await orderService.orderABookAddFromDB(order);
    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });

    // console.log(findBook)
    const updateQueantity= findBook.quantity-quantity;
    // console.log(updateQueantity)
    const updateQuantityData = {
      quantity:updateQueantity
    }
    // console.log(updateQuantityData)

    const updateBookData = await BookModel.findByIdAndUpdate(product,updateQuantityData)

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

export const orderController = {
  orderABook,
};
