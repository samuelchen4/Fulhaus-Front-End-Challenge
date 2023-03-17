import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/checkoutActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CheckoutTile = ({ product }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeFromCart(product._id));
  };

  return (
    <div className='flex mb-3 max-w-lg m-auto'>
      <div className='h-[200px] w-[200px]'>
        <img
          src={product.image}
          className='h-full w-full object-contain  rounded-md'
        />
      </div>
      <div className='text-2xl basis-full p-3 flex flex-col justify-between'>
        <div className='flex'>
          <h2 className='mr-2'>{product.name}</h2>
          <p className='ml-auto'>
            <button onClick={handleDelete}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </p>
        </div>
        <div className='flex justify-between'>
          <p className='text-gray-500'>${product.price}</p>
          <p>x{product.qty}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutTile;
