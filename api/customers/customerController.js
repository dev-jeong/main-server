const express = require("express");
const customerService = require("./customerService");

const router = express.Router();

router.get("/v1/customer", async (req, res) => {
  try {
    const customers = await customerService.getAllCustomers();
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/v1/customer/:customerId", async (req, res) => {
  const customerId = parseInt(req.params.customerId, 10);

  try {
    const customer = await customerService.getCustomerById(customerId);
    if (!customer) {
      res.status(404).send("Customer not found");
      return;
    }
    res.json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
