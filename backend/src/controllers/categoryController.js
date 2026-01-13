
const Category = require("../models/categoryModel");

exports.getAll = async (req, res) => {
  const categories = await Category.getCategories();
  res.json(categories.rows);
};
