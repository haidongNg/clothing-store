import { Dispatch } from 'redux';
import { Product } from '../../models';
import * as productService  from '../../services/index';

/**
 * Get all product
 * 
 * @param callback return product
 * @returns 
 */
export const getAllProduct = (callback: (val: Product[]) => void) => {
  return async (dispatch: Dispatch) => {
    const resp: Product[] = await productService.getAllProduct();

    if (!resp) {
      return;
    }
    callback(resp);
  };
};
