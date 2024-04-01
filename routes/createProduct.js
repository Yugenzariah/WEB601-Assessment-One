const express = require('express');
const router = express.Router();
const Product = require('../models/productModel.js');

// POST create a new product
router.post('/', async (req, res) => {
  try {
    const { name, price, image } = req.body; // Extract name, price, and image from request body
    const product = await Product.create({ name, price, image }); // Include image in the product data
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;