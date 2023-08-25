// Import Express library modules
import express, {Request, Response} from 'express';

// Instance of Express
const app = express();

// Port number for the server to listen for requests on
const port = 3000;

// Handle HTTP requests
app.get('/', (req: Request, res: Response) => { res.send('Hello World from TypeScript on nodemon!')});

// Start the server and listen for requests
app.listen(port, () => {console.log('Example app listening at http://localhost:${port}')});