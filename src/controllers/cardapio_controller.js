import CardapioService from '../services/cardapio_service';

const cardapioService = new CardapioService();

class CardapioController {
  /* get all */
  async findAllCardapioController(req, res) {
    try {
      const cardapio = await cardapioService.findAllCardapioService();

      res.send(cardapio);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  /* GetByID */
  async findByIdCardapioController(req, res) {
    const id = req.params.id;
    const escolhaCardapio = await cardapioService.findByIdCardapioService({
      id,
    });
    console.log(escolhaCardapio);
    res.send(escolhaCardapio);
  }

  /* criar novo Prato */
  async criarCardapio(req, res) {
    const { nome, descricao, foto, preco } = req.body;

    try {
      const novoPrato = await cardapioService.criarCardapio({
        nome,
        descricao,
        foto,
        preco,
      });
      res.status(201).send(novoPrato);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  async atualizarCardapio(req, res) {
    const { nome, descricao, foto, preco } = req.body;
    const id = req.params.id;

    try {
      const cardapioAtualizado = await cardapioService.atualizarCardapio({
        nome,
        descricao,
        foto,
        preco,
        id,
      });
      
      res.send(cardapioAtualizado);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send('Sabor já cadastrado');
      }
    }
  }

  async excluirCardapio(req, res) {
    const id = req.params.id;

    await cardapioService.excluirCardapio({ id });

    res.sendStatus(204);
  }
}

export default CardapioController;
