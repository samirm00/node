# Basic CRUD Operations

## Introduction

This project implements a basic CRUD (Create, Read, Update, Delete) application for managing books. It is built using Node.js and Express, and it provides endpoints to handle book-related operations.

## Project Structure

```plaintext
Project/

|-- controllers/
|   ├── bookController.js  # Handles book-related operations
|
|-- routes/
|   ├── bookRoutes.js      # Routes for book-related endpoints
|-- .babelrc               # Babel configuration for ES6 support
|-- .env                   # Environment variables configuration
|-- server.js              # Entry point of the application
|-- package.json           # Dependencies and scripts
|-- README.md              # This file
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher recommended)
- [npm](https://www.npmjs.com/) (v6.x or higher recommended)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   PORT=your-port-number
   ```

### Running the Application

Start the application in development mode:

```bash
npm run dev
```

The server should now be running on the port specified in your `.env` file.

## Environment Variables

Ensure the following environment variables are set in your `.env` file:

```plaintext
PORT=your-port-number
```

## API Endpoints

### Book Routes

- **GET /books**

  - Retrieves all books.

- **POST /books**

  - Creates a new book (authenticated users only).

- **GET /books/:id**

  - Retrieves a single book by ID.

- **PUT /books/:id**

  - Updates a book by ID (authenticated users only).

- **DELETE /books/:id**

  - Deletes a book by ID (authenticated users only).

## Controllers

### bookController.js

This file contains the logic for handling book-related operations, including:

- Fetching all books
- Creating a new book
- Retrieving a book by ID
- Updating a book by ID
- Deleting a book by ID

## Resources

- [Express Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
