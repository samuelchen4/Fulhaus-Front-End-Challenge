import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import staticChair from '../static/staticChair.jpg';
import Product from '../components/Product';
import { getProductList } from '../actions/productActions';
import Loader from '../components/Loader';

const ProductPage = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productList);
  const { productList, isLoading } = product;

  useEffect(() => {
    if (!isLoading && !productList.length) dispatch(getProductList());
  }, [dispatch]);

  return (
    <main className='w-4/5 h-full mx-auto flex flex-col lg:flex-row font-sans'>
      <section className='w-full mr-0 mb-3 lg:min-w-[300px] lg:w-2/5 lg:mr-3 lg:mb-0'>
        <img src={staticChair} alt='static' className='w-full h-full' />
      </section>
      <section className='h-full inline-grid flex-grow grid-cols-1 lg:mx-0 lg:grid-cols-3 grid-rows-2 gap-x-1.5 gap-y-3 grid-auto-rows'>
        {isLoading && <Loader />}
        {productList.map((product) => {
          return <Product product={product} key={product._id} />;
        })}
      </section>
    </main>
  );
};

export default ProductPage;
