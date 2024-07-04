import BooksFunctions from '../utils/bookUtils.js';

const { findBook, findBookIndex } = BooksFunctions;

const books = [
    {
        id: '1',
        title: 'Book 1'
    },
    {
        id: '2',
        title: 'Book 2'
    },
    {
        id: '3',
        title: 'Book 3'
    }
];

const bookControllers = {
    getBooks: (req, res) => {
        res.status(200).json(books);
    },
    createBook: (req, res) => {
        const { title } = req.body;
        const newBook = {
            id: String(books.length + 1),
            title: title
        };
        books.push(newBook);
        res.status(201).json(newBook);
    },
    getBook: (req, res) => {
        const { id } = req.params;
        const book = findBook(books, id);
        if (!book) {
            res.status(404).json({ message: 'Book not found' });
        } else {
            res.status(200).json(book);
        }
    },
    updateBook: (req, res) => {
        const { id } = req.params;
        const { title } = req.body;
        const book = findBook(books, id);
        if (!book) {
            res.status(404).json({ message: 'Book not found' });
        } else {
            book.title = title;
            res.status(200).json(book);
        }
    },
    deleteBook: (req, res) => {
        const { id } = req.params;
        const index = findBookIndex(books, id);
        if (index === -1) {
            res.status(404).json({ message: 'Book not found' });
        } else {
            books.splice(index, 1);
            res.status(200).json({ message: 'Book deleted' });
        }
    }
};

export default bookControllers;
