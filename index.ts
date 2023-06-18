import express, {Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app: Express = express();
const port = 5000

app.get('/', (req: Request, res: Response) => {
    res.send('Express + Typescript Server')
});


app.get("/home", (req: Request, res: Response) => {

    res.sendFile(__dirname + '/templates/home.html');
})

app.listen(port, () => {

    console.log('Debug mode is : off')
    console.log(`[server]: Server is runnin at http://localhost:${port}`);
    

})