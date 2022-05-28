import { Router } from 'express';
import CardapioController from '../controllers/cardapio_controller';
import verificarIdDeCardapioMiddleware from '../middlewares/verificarIdDeCardapio.middleware';
import verificadorDeCardapioMiddleware from '../middlewares/verificarDadosDeCardapio.middleware';

const cardapioController = new CardapioController();
const route = Router();

route.get('/todo-cardapio', cardapioController.findAllCardapioController);
route.get('/cardapio/:id', verificarIdDeCardapioMiddleware, cardapioController.findByIdCardapioController);

route.put(
  '/atualizar-cardapio/:id',
  verificarIdDeCardapioMiddleware,
  verificadorDeCardapioMiddleware,
  cardapioController.atualizarCardapio,
);

route.post(
  '/criar-cardapio',
  verificadorDeCardapioMiddleware,
  cardapioController.criarCardapio,
);

route.delete(
  '/excluir-cardapio/:id',
  verificarIdDeCardapioMiddleware,
  cardapioController.excluirCardapio,
);

export default route;
