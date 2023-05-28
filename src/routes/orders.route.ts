import express from 'express';
import orderController from '../controllers/order.controller';

const ordersRoute = express.Router();

ordersRoute.get('/orders', orderController.getAll);

export default ordersRoute;