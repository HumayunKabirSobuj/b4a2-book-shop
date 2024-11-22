import express, { Request, Response } from 'express'
const app = express()
const port = 3000

app.get('/', (req:Request, res:Response) => {
  res.json({
    success:true,
    message:'Book-Shop Server Is Running '
  })
})

export default app;