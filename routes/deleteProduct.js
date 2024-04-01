const express = require('express');
const router = express.Router();
const Product = require('../models/productModel.js');

// DELETE a product
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: `Cannot find any product with an ID of ${id}` });
        }
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
