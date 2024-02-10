module.exports = {
  production: {
    database: 'sequelize',
    dialect: 'sqlite',
    storage: './data/database.sqlite',
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
};
