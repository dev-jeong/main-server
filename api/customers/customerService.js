const { getRedis, setRedis } = require("../../lib/redis");

const Customer = require("./customerModel");

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
    const cachedData = await getRedis(`CUSTOMER:${customerId}`);
    if (cachedData) return cachedData;

    const customer = await Customer.findByPk(customerId);
    await setRedis(`CUSTOMER:${customerId}`, customer, 3600 * 24 * 7);

    return customer;
  } catch (error) {
    throw new Error("Error getting customer by customerId:", error);
  }
};

module.exports = {
  getAllCustomers,
  getCustomerById,
};
