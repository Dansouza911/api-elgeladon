import CardapioDB from '../models/cardapio.model';

class CardapioService {
  async findAllCardapioService() {
    const cardapioMongoAll = await CardapioDB.find();

    return cardapioMongoAll;
  }

  async findByIdCardapioService({ id }) {
    const cardapioSelecionado = await CardapioDB.findById(id);

    return cardapioSelecionado;
  }

  async criarCardapio({ nome, descricao, preco, foto }) {
    const novocardapio = {
      nome,
      descricao,
      preco,
      foto,
    };

    const cardapio = await CardapioDB.create(novocardapio);

    return cardapio;
  }

  async atualizarCardapio({ nome, descricao, preco, foto, id }) {
    const cardapioAtualizado = {
      nome,
      descricao,
      preco,
      foto,
    };
    try {
    await CardapioDB.updateOne({ _id: id}, cardapioAtualizado);
    const cardapio = await  CardapioDB.findById(id);
   
    return cardapio;

    if (cardapio.modifiedCount ===1) {
      return "Atualizado com sucesso"
    } else{
      return "Não Atualizado"
    }

    } catch (error){
      throw error;
    }
  
  }

  async excluirCardapio({ id }) {
    await CardapioDB.deleteOne({ _id: id });
  }
}

export default CardapioService;
