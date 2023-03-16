import { configureStore } from '@reduxjs/toolkit';
import { productListReducer } from './reducers/productReducer';
import { checkoutListReducer } from './reducers/checkoutReducer';

export const store = configureStore({
  reducer: {
    productList: productListReducer,
    checkoutList: checkoutListReducer,
  },
});
