import { Dispatch } from 'redux';
import { Product } from '../../core/models';
import * as productService  from '../../core/services/index';

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
