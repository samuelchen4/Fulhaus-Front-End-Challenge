import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CheckoutTile from './CheckoutTile';

const CheckoutModal = ({ setIsOpen }) => {
  const [total, setTotal] = useState(0);

  const checkout = useSelector((state) => state.checkoutList);
  const { checkoutList } = checkout;

  const calculateTotal = () => {
    const newTotal = checkoutList.reduce(
      (total, item) => item.price * item.qty + total,
      0
    );
    setTotal(newTotal);
  };

  useEffect(() => {
    calculateTotal();
  }, [checkoutList]);

  const handleCheckout = () => {
    // would send the checkout array to the API and clear the checkout array on frontend
    setIsOpen(false);
  };

  return (
    <div className='bg-neutral fixed w-screen mt-3 lg:w-2/5 lg:right-0'>
      <div className='mx-8 my-4'>
        <h2 className='text-3xl mb-6 font-bold'>My Order</h2>
        <div className='max-h-65vh overflow-y-auto mb-6'>
          {checkoutList.length ? (
            checkoutList.map((product) => {
              return <CheckoutTile key={product._id} product={product} />;
            })
          ) : (
            <p>nothing in cart!</p>
          )}
        </div>
        <section>
          <div className='flex justify-between text-3xl font-bold'>
            <p>Total</p>
            <p>${total}</p>
          </div>
          <button
            className='absolute inset-x-0 w-full py-2 px-6 border bg-black text-white tracking-wide'
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </section>
      </div>
    </div>
  );
};

export default CheckoutModal;
