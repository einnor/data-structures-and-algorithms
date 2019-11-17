import React from 'react';

import './style.scss';

type Props = {
  brandName: string;
};

const BrandLogo = ({ brandName }: Props) => (
  <div className="brand-logo">
    <span>{brandName}</span>
  </div>
);

export default BrandLogo;
