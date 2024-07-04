import express from 'express';
import dotenv from 'dotenv';

import bookRoutes from './routes/book.js';

// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 5004;

// Initialize express
const app = express();

// parse body and cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/books', bookRoutes);

// error
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
});

// handle 404
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Page is not found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
