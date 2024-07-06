import { createServer } from 'http';
import dotenv from 'dotenv';

// Configuring dotenv
dotenv.config();
const PORT = process.env.PORT || 5004;

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World\n');
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
