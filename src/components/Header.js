import React, { useState } from 'react';
import CheckoutModal from './CheckoutModal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-blue-100 fixed top-0 left-0 w-full mb-1.5 py-3'>
      <div className='block w-4/5 mx-auto flex justify-between items-center'>
        <p className='font-bold text-2xl'>Fulhaus</p>
        <button
          className='rounded-lg border-2 border-lime-600 bg-lime-600 text-white px-4 py-2 font-bold hover:bg-lime-500 transition-all duration-200'
          onClick={() => setIsOpen(!isOpen)}
        >
          Cart
        </button>
      </div>
      {isOpen && <CheckoutModal setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Header;
