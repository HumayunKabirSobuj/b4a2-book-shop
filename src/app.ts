import express, { Request, Response } from 'express';
import cors from 'cors';
import BookRouter from './app/modules/book/book.route';
const app = express();
// const port = 3000
app.use(cors());
//parser
app.use(express.json());
app.use('/api/products', BookRouter);

app.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Book-Shop Server Is Running ',
  });
});

export default app;
