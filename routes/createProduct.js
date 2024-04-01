const express = require('express');
const router = express.Router();
const Product = require('../models/productModel.js');

// POST a new product
router.post('/', async (req, res) => {
  try {
    const { name, price, quantity, image } = req.body; 
    const product = await Product.create({ name, price, quantity, image }); 
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;