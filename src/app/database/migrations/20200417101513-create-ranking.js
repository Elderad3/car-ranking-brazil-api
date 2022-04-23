'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('ranking', 
    { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      ano: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      mes: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      categoria: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_carro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      posicao: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      marca_modelo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    }
    );
    
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('ranking');
    
  }
};
