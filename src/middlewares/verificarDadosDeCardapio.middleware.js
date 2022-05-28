const verificadorDeCardapioMiddleware = (req, res, next) => {
  const { nome, descricao, foto, preco } = req.body;
  if (!nome || !descricao || !preco || !foto) {
    res.status(422).send('Dados de cadastro incompletos');
  }

  next();
};

export default verificadorDeCardapioMiddleware;
