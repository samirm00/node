import express from 'express';
import dotenv from 'dotenv';

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

// construct path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import userRoutes from './routes/user.js';

// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 5004;

// Initialize express
const app = express();

// parse body and cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// use ejs template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use routes
app.use('/user', userRoutes);

// error
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
});

// handle 404
app.use('*', (req, res) => {
    res.status(404).render('404', {
        title: '404 Not Found',
        message: 'Page not found'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
