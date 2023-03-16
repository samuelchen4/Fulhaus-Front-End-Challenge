import { createReducer } from '@reduxjs/toolkit';
import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
} from '../constants/checkoutConstants';

export const checkoutListReducer = createReducer(
  { checkoutList: [] },
  (builder) => {
    builder
      .addCase(ADD_CART_ITEM, (state, action) => {
        const item = action.payload;
        const existItem = state.checkoutList.find((x) => x._id === item._id);
        if (existItem) {
          state.checkoutList = state.checkoutList.map((c) =>
            c._id === existItem._id ? { ...item, qty: (c.qty += item.qty) } : c
          );
        } else {
          state.checkoutList.push(item);
        }
      })
      .addCase(REMOVE_CART_ITEM, (state, action) => {
        state.checkoutList = state.checkoutList.filter(
          (product) => product._id !== action.payload
        );
      });
  }
);
