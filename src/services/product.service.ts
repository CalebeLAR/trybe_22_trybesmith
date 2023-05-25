import { ServiceResponse } from 'src/types/serviceResponse';
import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';

const create = async (product:Product):Promise<ServiceResponse<Product>> => {
  const newProduct = await ProductModel.create(product);

  return { status: 'SUCCESSFUL', data: newProduct.dataValues };
};

const getAll = async ():Promise<ServiceResponse<Product[]>> => {
  const products = (await ProductModel.findAll()).map((pdt) => pdt.dataValues);

  return { status: 'SUCCESSFUL', data: products };
};

export default {
  create,
  getAll,
};
