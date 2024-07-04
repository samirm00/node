const findBook = (books, id) => {
    return books.find((book) => book.id === id);
};

const findBookIndex = (books, id) => {
    return books.findIndex((book) => book.id === id);
};

export default { findBook, findBookIndex };
