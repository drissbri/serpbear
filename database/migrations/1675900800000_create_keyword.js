'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('keyword', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      keyword: {
        type: Sequelize.STRING,
        allowNull: false
      },
      device: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'desktop'
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'US'
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: ''
      },
      latlong: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: ''
      },
      domain: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '{}'
      },
      lastUpdated: {
        type: Sequelize.STRING,
        allowNull: true
      },
      added: {
        type: Sequelize.STRING,
        allowNull: true
      },
      position: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      history: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: JSON.stringify([])
      },
      url: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: JSON.stringify([])
      },
      tags: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: JSON.stringify([])
      },
      lastResult: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: JSON.stringify([])
      },
      sticky: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: true
      },
      updating: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      lastUpdateError: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'false'
      },
      settings: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('keyword');
  }
};