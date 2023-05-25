import express from 'express';
import productController from '../controllers/product.controller';

const productsRoute = express.Router();

productsRoute.post('/products', productController.create);
productsRoute.get('/products', productController.getAll);

export default productsRoute;