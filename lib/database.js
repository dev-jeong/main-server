const { Sequelize, DataTypes } = require("sequelize");

const dbClient = new Sequelize({
  dialect: "mysql",
  host: process.env.MYSQL_HOST || "localhost",
  port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306,
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "sakila",
  logging: false, 
});

module.exports = {
  dbClient,
  DataTypes,
};
