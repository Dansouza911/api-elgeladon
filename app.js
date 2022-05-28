import express from 'express';
import cors from 'cors';
import route from './src/routes/cardapio_route';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/cardapio', route);

export default app;
