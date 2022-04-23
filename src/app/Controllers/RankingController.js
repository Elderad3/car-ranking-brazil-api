const Ranking = require('../models/Ranking');

class RankingController {
 
  async buscarTodos(req, res){
    const todos = await Ranking.findAll();
    return res.json(todos);
  }


  async buscarPorAno(req, res){
    const ranking = await Ranking.findAll({
      where: {
        ano: req.params.ano
      }
    });
    return res.json(ranking);
  }


  async buscarPorAnoEMes(req, res){
    const ranking = await Ranking.findAll({
      where: {
        ano: req.params.ano,
        mes: req.params.mes
      }
    });
    return res.json(ranking);
  }

  async buscarPorCarro(req, res){
    const ranking = await Ranking.findAll({
      where: {
        carro: req.params.carro
      }
    });
    return res.json(ranking);
  }

}

module.exports = new RankingController();