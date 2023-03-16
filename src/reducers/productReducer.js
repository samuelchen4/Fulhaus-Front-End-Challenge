import { createReducer } from '@reduxjs/toolkit';
import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from '../constants/productConstants';

export const productListReducer = createReducer(
  { productList: [] },
  (builder) => {
    builder
      .addCase(GET_PRODUCTS_REQUEST, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(GET_PRODUCTS_SUCCESS, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.productList = action.payload;
      })
      .addCase(GET_PRODUCTS_FAIL, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.err = action.payload;
      });
  }
);
