import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loader = () => {
  return;
  <div className='flex items-center justify-center'>
    <FontAwesomeIcon
      icon={['fa-duotone', 'fa-spinner-third']}
      className='animate-spin'
    />
  </div>;
};

export default Loader;
