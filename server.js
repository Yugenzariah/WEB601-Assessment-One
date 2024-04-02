const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware for parsing JSON data
app.use(express.json()); // To use http methods in JSON format

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: false })) // To use http methods in forms format

// Middlware to Serve static files from the public directory
app.use(express.static('public'));

// Importing and using the product routes
const getProductSchemaRoute = require('./routes/getProductSchema')
const getAllProductsRoute = require('./routes/getAllProducts');
const getProductByIdRoute = require('./routes/getProductByID');
const createProductRoute = require('./routes/createProduct');
const updateProductRoute = require('./routes/updateProduct');
const deleteProductRoute = require('./routes/deleteProduct');

// Using the respective routes
app.use('/products', getProductSchemaRoute);
app.use('/products', getAllProductsRoute);
app.use('/products', getProductByIdRoute);
app.use('/products', createProductRoute);
app.use('/products', updateProductRoute);
app.use('/products', deleteProductRoute);

// Connecting to MongoDB
mongoose.connect('mongodb+srv://admin:Restful_API23@restfulapi.ahejztq.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then(() => {
        console.log('connected to MongoDB')
        // Start the server
        app.listen(3000, () => {
            console.log(`Server is running on port 3000`);
        });
    }).catch((error) => {
        console.log(error)
    });
