const User = require("./model");
const sha256 = require("js-sha256");
const jwt = require("jwt-then");

async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const emailRegex = /@gmail.com|@yahoo.com|@hotmail.com|@live.com/;
    if (!emailRegex.test(email)) {
      return res.json({ message: "Email is not support from your domain" });
    }

    if (password.length < 6) {
      return res.json({
        message: "Registrasi Gagal minimal password 6 karakter",
      });
    }

    let cekEmail = await User.find({ email: email });
    if (!cekEmail.length) {
      let user = new User({
        name,
        email,
        password: sha256(password + process.env.secretKey),
      });
      await user.save();
      return res.json({ message: "succes", data: user });
    } else if (cekEmail.length) {
      return res.json({ error: 1, message: "failed email telah terdaftar" });
    }
  } catch (error) {
    if (error && error.name === "ValidationError") {
      return res.json({
        error: 1,
        message: error.message,
        fields: error.errors,
      });
    }
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
      password: sha256(password + process.env.secretKey),
    });

    if (!user) {
      return res.json({ message: "Email and Password did not match" });
    }
    const token = await jwt.sign({ id: user.id }, process.env.secretKey);
    res.json({
      message: "User logged successfully",
      token,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { login, register };
