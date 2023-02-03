import app from './app.js';
import mongoose from "mongoose";
import path from 'path';
import env from 'dotenv';
env.config({path : path.resolve('./.env')});

const port = process.env.PORT || 5000;
const DB_URI = process.env.MONGOURI;

mongoose.set('strictQuery', false);
mongoose
    .connect(DB_URI)
    .then(()=> console.log('Connected to DB!'))
    .catch(err => console.log(err.message));


app.listen(port, () => {
    console.log(`App is running on ${port}`);
});