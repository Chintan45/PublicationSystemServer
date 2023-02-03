import express from 'express';
import cors from 'cors';
import homeRoutes from './routes/homeRoutes.js'; 

const app = express();

app.use(express.json());
app.use(cors({origin: '*'}))

app.use('/', homeRoutes);


export default app;