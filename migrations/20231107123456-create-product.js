'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const sequelize = new Sequelize('ezra', 'ezra', 'tutu@12345', {
      host: 'localhost',
      dialect: 'mysql',
    });

    await sequelize.query('CREATE TABLE IF NOT EXISTS Products (id INT, name VARCHAR(255), img VARCHAR(25000), price VARCHAR(255), color VARCHAR(255), category VARCHAR(255), description TEXT, isAvailable BOOLEAN);');
  },

  down: async (queryInterface, Sequelize) => {
    const sequelize = new Sequelize('ezra', 'ezra', 'tutu@12345', {
      host: 'localhost',
      dialect: 'mysql',
    });

    await sequelize.query('DROP TABLE IF EXISTS Products;');
  },
};

