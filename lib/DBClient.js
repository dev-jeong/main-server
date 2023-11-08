const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1q2w3e4r!',
  database: 'sakila',
});

module.exports = sequelize;