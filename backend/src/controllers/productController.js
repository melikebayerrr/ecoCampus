
const Product = require("../models/productModel");

exports.getAll = async (req, res) => {
  const products = await Product.getAllProducts();
  res.json(products.rows);
};

exports.create = async (req, res) => {
  const { title, price, description, image_url, category_id } = req.body;
  await Product.createProduct(
    title,
    price,
    description,
    image_url,
    req.userId,
    category_id
  );
  res.json({ message: "Ürün eklendi" });
};
