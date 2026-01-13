
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await User.createUser(username, email, hash);
  res.json({ message: "Kayıt başarılı" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = (await User.findUserByEmail(email)).rows[0];
  if (!user) return res.status(401).json({ message: "Hatalı giriş" });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ message: "Hatalı giriş" });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  res.json({ token });
};
