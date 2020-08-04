import express from 'express';
import routes from './routes';
const app = express();

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

app.use(express.json());
app.use(routes);


app.listen(3333, () => {
    console.log("server started on port 3333");
});