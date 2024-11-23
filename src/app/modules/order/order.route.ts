import express from 'express';
import { orderController } from './order.controller';
const orderRouter = express.Router();

orderRouter.post('/', orderController.orderABook);

export default orderRouter;
