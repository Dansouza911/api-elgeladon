import PaletasServices from '../services/paletas_service';

const paletasServices = new PaletasServices();

class PaletasController {
  /* get all */
  findAllPaletasController = (req, res) => {
    const paletas = paletasServices.findAllPaletasService();
    res.send(paletas);
  };

  /* GetByID */
  findByIdPaletaController = (req, res) => {
   
    const parametroId = Number(req.params.id);
      const escolhaPaleta = paletasServices.findByIdPaletaService({parametroId});
   
      res.send(escolhaPaleta);
            
  };

  /* criar nova Paleta */
  criarPaleta(req, res) {
    const { sabor, descricao, foto, preco } = req.body;

    try {
      const novaPaleta = paletasServices.criarPaleta(
        { sabor,
         descricao,
         foto,
         preco,}
       );
       res.status(201).send(novaPaleta);
    } catch (error) {
      res.status(error.status).send(error.message)
    }

    
  }

atualizarPaleta(req, res) {
  const { sabor, descricao, foto, preco } = req.body;
  const id = Number(req.params.id);

  const paletaAtualizada = paletasServices.atualizarPaleta(
   { sabor,
    descricao,
    foto,
    preco,
    id}
  );
  res.status(201).send(paletaAtualizada);
}

excluirPaleta(req, res) {
  const id = Number(req.params.id);

  paletasServices.excluirPaleta({id});

  res.sendStatus(204);
}

}

export default PaletasController;
