import { ServiceResponse } from 'src/types/serviceResponse';
import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';

const create = async (product:Product):Promise<ServiceResponse<Product>> => {
  const newProduct = await ProductModel.create(product);

  return { status: 'SUCCESSFUL', data: newProduct.dataValues };
};

export default {
  create,
};
