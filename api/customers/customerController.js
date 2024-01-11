const express = require("express");
const customerService = require("./customerService");

const router = express.Router();

// 모든 고객 정보 가져오기
router.get("/v1/customer", async (req, res) => {
  const customers = await customerService.getAllCustomers();

    res.json(customers);
});

// 특정 고객 정보 가져오기
router.get("/v1/customer/:customerId", async (req, res) => {
  const customerId = Number(req.params.customerId);

  const customer = await customerService.getCustomerById(customerId);
  if (!customer) {
    res.status(404).send();
  }
  res.json(customer);
});

module.exports = router;
