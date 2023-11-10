const Customer = require("../../lib/model/customerModel");

const getAllCustomers = async () => {
  try {
    const customers = await Customer.findAll();
    return customers;
  } catch (error) {
    throw new Error("Error getting customers:", error);
  }
};

const getCustomerById = async (customerId) => {
  try {
    const customer = await Customer.findByPk(customerId);
    return customer;
  } catch (error) {
    throw new Error("Error getting customer by customerId:", error);
  }
};

module.exports = {
  getAllCustomers,
  getCustomerById,
};
