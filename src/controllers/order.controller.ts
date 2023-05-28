import { Request, Response } from 'express';
import orderService from '../services/order.service';
// import mapStatusHTTP from '../utils/mapStatusHTTP';

const getAll = async (req:Request, res:Response) => {
  const { data } = await orderService.getAll();
  // if (status !== 'SUCCESSFUL') return res.status(mapStatusHTTP(status)).json({ message: 'erro' });

  return res.status(200).json(data);
};

export default {
  getAll,
};