import express, { Request, Response } from 'express';
import dotenv from "dotenv";
import sermonsRouter from './sermons/sermons.routes';
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

if (process.env.NODE_ENV == 'development') {
    // add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode');
}

app.get('/', (req: Request, res: Response) => {
 res.send('Welcome to S.A.M.!\nThe Sermon Archive Manager.');
});

app.use('/', sermonsRouter);

app.listen(port, () => {
 console.log(`S.A.M. app listening at http://localhost:${port}`)
});
