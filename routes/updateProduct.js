const express = require('express');
const router = express.Router();
const Product = require('../models/productModel.js');

// PUT a product with an ID
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: `The product with the ID ${id} cannot be found` });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
