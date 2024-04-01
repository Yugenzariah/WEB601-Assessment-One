const express = require('express');
const router = express.Router();
const Product = require('../models/productModel.js');

// PUT a product with the ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, image } = req.body;
    const updatedFields = { name, price }; 
    if (image) {
      updatedFields.image = image; // Update image if provided
    }
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedFields, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: `The product with the ID ${id} cannot be found` });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;