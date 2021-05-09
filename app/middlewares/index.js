const jwt = require("jwt-then");

async function security(req, res, next) {
  try {
    if (!req.headers.authorization) {
      return res.json({ message: "Forbidden!!" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const payload = await jwt.verify(token, process.env.secretKey);
    req.payload = payload;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Warning Forbidden",
    });
  }
}

module.exports = { security };
