import express from 'express';
import { orderController } from './order.controller';
const orderRouter = express.Router();

orderRouter.post('/', orderController.orderABook);
orderRouter.get('/revenue', orderController.getRevenue)

export default orderRouter;
