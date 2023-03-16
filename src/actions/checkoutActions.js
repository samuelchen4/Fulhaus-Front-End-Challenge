import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
} from '../constants/checkoutConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  // get product list
  const productList = getState().productList.productList;
  const product = productList.find((product) => product._id === id);

  // create new object based on the matching object is productlist with the same id
  dispatch({
    type: ADD_CART_ITEM,
    payload: {
      _id: id,
      name: product.fulhausProductName,
      image: product.imageURLs[0],
      price: product.retailPrice,
      qty,
    },
  });
};

export const removeFromCart = (id) => async (dispatch) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });
};
