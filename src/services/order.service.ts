import Sequelize from 'sequelize';
import { ServiceResponse } from '../types/serviceResponse';
import ProductModel from '../database/models/product.model';
import OrderModel from '../database/models/order.model';
import { Order } from '../types/Order';

const getAll = async ():Promise<ServiceResponse<Order[]>> => {
  const data = (await OrderModel.findAll({ 
    include: [{
      model: ProductModel,
      attributes: [],
      as: 'productIds',
    }],
    attributes: [
      'id', 'userId',
      [Sequelize.literal('JSON_ARRAYAGG(`productIds`.`id`)'), 'productIds'],
    ],
    group: ['Order.id'],
    raw: true,
  })) as unknown[];

  return { status: 'SUCCESSFUL', data: data as Order[] };
};

export default {
  getAll,
};
