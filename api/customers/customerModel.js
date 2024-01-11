const { dbClient, DataTypes } = require("../../lib/database");

const Customer = dbClient.define(
  "Customer",
  {
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "customer",
    timestamps: false,
  }
);

module.exports = Customer;
