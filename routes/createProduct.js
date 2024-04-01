const express = require('express');
const router = express.Router();
const Product = require('../models/productModel.js');

// POST create a new product
router.post('/', async (req, res) => {
  try {
    const { name, price, image } = req.body; 
    const product = await Product.create({ name, price, image }); 
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;