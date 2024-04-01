const express = require('express');
const router = express.Router();
const schema = require('../productSchema.json');

// GET the JSON schema of the product
router.get('/schema', async (req, res) => {
    try {
        res.status(200).json(schema);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
