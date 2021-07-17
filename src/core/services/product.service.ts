import Axios from 'axios';
import { environment as env } from '../../environments/environment.prod';
import { Product } from '../models';
const apiUrl = `${env.apiURL}/products`;

/**
 * Get all product
 */
export const getAllProduct = async (): Promise<Product[]> => {
  const listProduct: Product[] = await (await Axios.get(apiUrl)).data;
  return listProduct;
};
