const {Router} = require('express');

const routes = new Router();

const RankingController = require('./app/Controllers/RankingController');

routes.get('/ranking', RankingController.buscarTodos);
routes.get('/ranking/:ano', RankingController.buscarPorAno);
routes.get('/ranking/:ano/:mes', RankingController.buscarPorAnoEMes);

routes.get('/', (req, res) =>{
  res.json({message: 'Olá'})
})

module.exports = routes;