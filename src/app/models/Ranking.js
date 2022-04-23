const Sequelize = require('sequelize');

class Ranking extends Sequelize.Model {
  static init(sequelize){
    super.init(
      {
        ano: Sequelize.INTEGER,
        mes: Sequelize.INTEGER,
        categoria: Sequelize.INTEGER,
        marca: Sequelize.STRING,
        modelo:  Sequelize.STRING,
        id_carro:  Sequelize.STRING,
        posicao:  Sequelize.INTEGER,
        marca_modelo:  Sequelize.STRING,
        quantidade:  Sequelize.INTEGER
      },
      {
        sequelize,
        tableName: 'ranking',
      }
    );

    return this
  }

  
}

module.exports = Ranking;