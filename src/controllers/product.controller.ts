import { Request, Response } from 'express';
import productService from '../services/product.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const create = async (req:Request, res:Response) => {
  const newProduct = req.body;

  const { status, data } = await productService.create(newProduct);
  if (status !== 'SUCCESSFUL') return res.status(mapStatusHTTP(status)).json({ message: 'erro' });

  return res.status(201).json(data);
};

export default {
  create,
};