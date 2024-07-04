import express from 'express';

import bookControllers from '../controllers/book.js';

const { getBooks, createBook, getBook, updateBook, deleteBook } =
    bookControllers;

const router = express.Router();

router.get('/', getBooks);
router.post('/', createBook);
router.get('/:id', getBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;
