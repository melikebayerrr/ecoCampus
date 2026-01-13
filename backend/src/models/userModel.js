
const db = require("./db");

const createUser = (username, email, password) => {
  return db.query(
    "INSERT INTO users (username, email, password) VALUES ($1,$2,$3)",
    [username, email, password]
  );
};

const findUserByEmail = (email) => {
  return db.query("SELECT * FROM users WHERE email=$1", [email]);
};

module.exports = { createUser, findUserByEmail };
