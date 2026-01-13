
const db = require("./db");

const getAllProducts = () => {
  return db.query(
    "SELECT p.*, u.username, c.name AS category FROM products p JOIN users u ON p.user_id=u.id JOIN categories c ON p.category_id=c.id"
  );
};

const createProduct = (title, price, description, image_url, user_id, category_id) => {
  return db.query(
    "INSERT INTO products (title, price, description, image_url, user_id, category_id) VALUES ($1,$2,$3,$4,$5,$6)",
    [title, price, description, image_url, user_id, category_id]
  );
};

module.exports = { getAllProducts, createProduct };
