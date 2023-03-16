import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../actions/checkoutActions';

const CheckoutTile = ({ product }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeFromCart(product._id));
  };

  return (
    <div className='flex mb-3 max-w-lg'>
      {/* <div className='w-full h-48'> */}
      <img
        src={product.image}
        className='h-auto w-64 object-cover border border-gray rounded-md'
      />
      {/* </div> */}
      <div className='text-2xl basis-full p-3 flex flex-col justify-between'>
        <div className='flex'>
          <h2 className='mr-6'>{product.name}</h2>
          <p>
            <button onClick={handleDelete}>remove</button>
          </p>
        </div>
        <div className='flex justify-between'>
          <p className='text-grey'>{product.price}</p>
          <p>x{product.qty}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutTile;
