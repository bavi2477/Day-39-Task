import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/config.js';
import studentRouter from './Routers/studentRouter.js';
import mentorRouter from './Routers/mentorRouter.js';

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
// const PORT = 4000;
const port = process.env.PORT;

connectDB();

app.get('/', (req, res) => {
    try {
        res.status(200).send(`<div> <h1> Api call is working. </h1.</div>`)
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
})

app.use('/stuapi', studentRouter)
app.use('/menapi', mentorRouter)


app.listen(port, () => {
    console.log("App is running on the port -", port);
})