import Axios from 'axios';
import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from '../constants/productConstants';

export const getProductList = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });

    const { data } = await Axios.get(
      '/api/products-service/products/website/CAD?page=0&limit=6'
    );

    const products = data.data.products;
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: err.message });
  }
};
