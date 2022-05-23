import paletas from '../database';

const verificarIdDePaletaMiddleware = (req, res, next) => {
  const parametroId = +req.params.id;

  const paleta = paletas.find((paleta) => paleta.id === parametroId);

  if (!paleta ) {
   return res.status(404).send('Paleta não encontrada')
};
next();
  };

 export default verificarIdDePaletaMiddleware;


