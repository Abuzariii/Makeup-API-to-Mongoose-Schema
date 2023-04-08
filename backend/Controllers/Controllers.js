const Makeup = require("../MongoDB/makeup");
const mongoose = require("mongoose");

// Create a new Item
const createItem = async (req, res) => {
  const data = req.body;
  try {
    data.forEach((obj) => {
      if (typeof obj == "object") {
        Makeup.create({
          name: obj.name,
          brand: obj.brand,
          price: obj.price,
          currency: obj.currency,
          image_link: obj.image_link,
          product_type: obj.product_type,
          category: obj.category,
          product_link: obj.product_link,
          description: obj.description,
          tag_list: obj.tag_list,
          product_colors: obj.product_colors,
        });
      }
    });
  } catch {
    (error) => {
      res.status(404).json({ error: error.message });
    };
  }
};

module.exports = {
  createItem,
};
