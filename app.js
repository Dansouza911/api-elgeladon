import express from 'express';
import cors from 'cors';
import route from './src/routes/paletas_route';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/paletas', route);

export default app;
