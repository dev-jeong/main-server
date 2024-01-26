const jwt = require("jsonwebtoken");

const secretKey = "1q2w3e4r!";

function generateToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: "1h" });
}

function authenticateToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ error: "Forbidden(Token)." });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized(Token)." });
    }

    req.user = decoded;
    next();
  });
}

module.exports = {
  generateToken,
  authenticateToken,
};
