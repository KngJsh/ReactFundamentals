import React from 'react';
import loaderSrc from '../../assets/wb.jpg';

const Loader = props => (
  <div>
    <img
      style={{ width: 400 }}
      alt="loader icon"
      src={loaderSrc} />
  </div>
);

export default Loader;
