import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';

const App = () => {
  return (
    <div className='box-border h-screen w-full m-0'>
      <Router>
        <Header />
        <div className='w-full mt-20'>
          <Routes>
            <Route path='/' element={<ProductPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
