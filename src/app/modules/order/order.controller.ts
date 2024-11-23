import { Request, Response } from 'express';
import { BookModel } from '../book/book.model';
import { orderService } from './order.service';
import { orderModel } from './order.model';

//Oder A book
const orderABook = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const { email, product, quantity, totalPrice } = data;
    const findBook = await BookModel.findById(data.product);

    if (!findBook) {
      res.status(404).json({
        success: false,
        message: 'Book Not Found',
      });
      return;
    }

    if (data.quantity > findBook.quantity) {
      res.status(404).json({
        success: false,
        message: 'Insufficient stock',
        error: 'Validation Error',
      });
      return;
    }
    // const totalPrice = findBook.price * data.quantity;
    const order = {
      email,
      product,
      quantity,
      totalPrice,
    };

    const result = await orderService.orderABookAddFromDB(order);
    // console.log(findBook)
    const updateQueantity = findBook.quantity - quantity;
    // console.log(updateQueantity)
    const updateQuantityData = {
      quantity: updateQueantity,
    };
    // console.log(updateQuantityData)
    await BookModel.findByIdAndUpdate(product, updateQuantityData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Order cannot created',
      error,
    });
  }
};

//Revenue Calculation
const getRevenue = async (req: Request, res: Response) => {
  try {
    const Revenue = await orderModel.aggregate([
      // group stage
      {
        $group: {
          _id: null,
          totalSelary: { $sum: '$totalPrice' },
        },
      },
      { $project: { totalSelary: 1 } },
    ]);
    // console.log(Revenue[0].totalSelary);
    res.status(200).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: {
        totalSelary: Revenue[0].totalSelary,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Revenue cannot calculated',
      error,
    });
  }
};

export const orderController = {
  orderABook,
  getRevenue,
};
