const express = require("express");

const customerService = require("./customerService");
const jwt = require("../../lib/jwt");

const router = express.Router();

/** 로그인 */
router.post("/v1/login", async (req, res) => {
  const email = req.body.email;

  const customer = await customerService.getCustomerByEmail(email);
  if (!customer) {
    res.status(404).send();
  } else {
    const token = jwt.generateToken({
      email: email,
    });
    res.status(200).json({ token: token });
  }
});

/** 모든 고객 정보 가져오기 */
router.get("/v1/customer", jwt.authenticateToken, async (req, res) => {
  const customers = await customerService.getAllCustomers();

  res.json(customers);
});

/** 특정 고객 정보 가져오기 */
router.get("/v1/customer/:customerId", jwt.authenticateToken, async (req, res) => {
  const customerId = Number(req.params.customerId);

  const customer = await customerService.getCustomerById(customerId);
  if (!customer) {
    res.status(404).send();
  }
  res.json(customer);
});

module.exports = router;
