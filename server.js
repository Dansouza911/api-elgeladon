import app from './app';
import { conectarAoDataBase } from './src/database'

const port = 3001;

app.listen(port, () => {
  conectarAoDataBase();
  console.log(`Servidor rodando em http://localhost:${port}`);
});

