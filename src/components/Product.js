import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/checkoutActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export const Product = ({ product }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(addToCart(product._id, 1));
  };

  return (
    <div className='min-h-[600px] lg:min-h-0 inline-block bg-gray-100 flex flex-col border rounded-md max-h-96'>
      <section className='h-4/6 mb-2'>
        <img src={product.imageURLs[0]} className='w-full h-full' />
      </section>
      <section className='flex-grow flex flex-col px-3'>
        <h2 className='mb-0.5 font-bold'>{product.fulhausProductName}</h2>
        <p className='mb-3'>
          <FontAwesomeIcon icon={faStar} className='text-yellow-300' />
          <FontAwesomeIcon icon={faStar} className='text-yellow-300' />
          <FontAwesomeIcon icon={faStar} className='text-yellow-300' />
          <FontAwesomeIcon icon={faStar} className='text-yellow-300' />
          <FontAwesomeIcon icon={faStar} className='text-yellow-300' />
        </p>
        <div className='flex justify-between mb-2 mt-auto'>
          <p className='font-bold'>${product.retailPrice}</p>
          <button onClick={onClickHandler}>
            <FontAwesomeIcon
              icon={faCartPlus}
              className='border border-black rounded-full p-1 inline-block bg-white'
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Product;
