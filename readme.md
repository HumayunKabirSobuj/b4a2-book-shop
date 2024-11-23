# Book Shop Application (B4A2V1)

A professional-grade bookshop management application built using **TypeScript**, **Express**, and **MongoDB** (via **Mongoose**). The application manages books (products) and orders while ensuring data integrity through comprehensive schema validation and seamless CRUD operations.

## Features

1. **Product (Book) Management**

   - Add new books with details like title, author, price, category, description, and stock information.
   - Update book details including price, stock quantity, and more.
   - Retrieve details of a specific book by its unique ID.
   - Delete books from the catalog.

2. **Order Management**

   - Place orders for books, automatically deducting stock quantity and marking the book as "out of stock" if inventory is depleted.
   - Prevent orders with insufficient stock by returning a detailed error message.

3. **Revenue Calculation**

   - Calculate the total revenue generated from all orders using MongoDB aggregation.

4. **Error Handling**
   - Generic error responses with detailed validation errors . Here i Used Global and Custom error handler.

---

## Installation and Setup

### Prerequisites

- **Node.js** (v16 or later)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance, e.g., MongoDB Atlas)
- **TypeScript** (Dev dependencies installation recommended)

### Steps

1. **Clone the Repository**

   ```
   git clone https://github.com/HumayunKabirSobuj/b4a2-book-shop.git

   ```

2. **Configure Environment Variables**

Create a `.env` file in the root directory and add:

```
NODE_ENV=development
PORT=5000
DATABASE_URL=yourDataBaseUrl
```

1. **Start the Server**

```
npm run start:dev
```

### API Documentation

### Products (Books) <br>

- Create a Book <br>
  Endpoint: /api/products <br>
  Method: POST <br>
  Request Body: <br> <br>

```
{
"title": "The Great Gatsby",
"author": "F. Scott Fitzgerald",
"price": 10,
"category": "Fiction",
"description": "A story about the American dream.",
"quantity": 100,
"inStock": true
}
```

- Get All Books <br>
  Endpoint: /api/products <br>
  Method: GET <br> <br>

- Get a Specific Book <br>
  Endpoint: /api/products/:id <br>
  Method: GET <br> <br>

- Update a Book <br>
  Endpoint: /api/products/:id <br>
  Method: PUT <br>
  Request Body: Include only fields to update, e.g.: <br> <br>

```
{
  "price": 15,
  "quantity": 25
}
```

- Delete a Book <br>
  Endpoint: /api/products/:id <br>
  Method: DELETE <br> <br>

### Orders

- Place an Order <br>
  Endpoint: /api/orders <br>
  Method: POST <br>
  Request Body: <br><br>
  example :

```
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 30
}
```

- Calculate Revenue <br>
  Endpoint: /api/orders/revenue <br>
  Method: GET <br> <br>
