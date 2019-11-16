import React from 'react';

import './style.scss';

const BrandLogo = ({ brandName }) => (
  <div className="brand-logo">
    <span>{brandName}</span>
  </div>
);

export default BrandLogo;
