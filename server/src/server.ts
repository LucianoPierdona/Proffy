import express from 'express';
import routes from './routes';
import cors from 'cors';
const app = express();

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3001, () => {
    console.log("server started on port 3001");
});