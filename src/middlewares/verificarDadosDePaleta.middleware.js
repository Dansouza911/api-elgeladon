import paletas from "../database";

const verificadorDePaletaMiddleware = (req, res, next) => {
    const {sabor, descricao, foto, preco} = req.body;
    if (!sabor || !descricao || !preco || !foto) {
        res.status(422).send("Dados de cadastro incompletos");
      }

      next();
}

export default verificadorDePaletaMiddleware;

