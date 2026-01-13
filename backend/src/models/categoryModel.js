
const db = require("./db");

const getCategories = () => {
  return db.query("SELECT * FROM categories");
};

module.exports = { getCategories };
