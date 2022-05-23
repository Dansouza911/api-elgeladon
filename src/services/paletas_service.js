import paletas from '../database';

class PaletasServices {
  findAllPaletasService() {
    return paletas;
  }

  findByIdPaletaService({ parametroId }) {
    const paletaSelecionada = paletas.find(
      (paleta) => paleta.id === parametroId,
    );

    return paletaSelecionada;
  }

  criarPaleta({ sabor, descricao, preco, foto, id }) {
    

    const novoId =
      paletas.length === 0 ? 1 : paletas[paletas.length - 1].id + 1;
    const novaPaleta = {
      id: novoId,
      sabor,
      descricao,
      preco,
      foto,
    };

    paletas.push(novaPaleta);
    return novaPaleta;
  }

  atualizarPaleta({ sabor, descricao, preco, foto, id }) {
    const paletaAtualizada = {
      id,
      sabor,
      descricao,
      preco,
      foto,
    };

    const paletaIndex = paletas.findIndex((paleta) => paleta.id === id);
    paletas[paletaIndex] = paletaAtualizada;

    return paletaAtualizada;
  }

  excluirPaleta({ id }) {
    const paletaIndex = paletas.findIndex((paleta) => paleta.id === id);

    paletas.splice(paletaIndex, 1);
  }
}

export default PaletasServices;
