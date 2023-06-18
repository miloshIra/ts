import express, {Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app: Express = express();
const port = 5000

app.get('/', (req: Request, res: Response) => {
    res.send('Express + Typescript Server')
});


app.listen(port, () => {

    console.log('[server]: Server is runnin at http://localhost:5000');

})