import CardapioDB from '../models/cardapio.model';
import mongoose from 'mongoose';

const verificarIdDeCardapioMiddleware = (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const response = CardapioDB.findById(id);

  if (!response) {
    return res.status(404).send('Prato não encontrada');
  }
  next();
};

export default verificarIdDeCardapioMiddleware;
