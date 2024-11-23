import { orderInterface } from './order.interface';
import { orderModel } from './order.model';

const orderABookAddFromDB = (data: orderInterface) => {
  const result = orderModel.create(data);
  return result;
};

export const orderService = {
  orderABookAddFromDB,
};
