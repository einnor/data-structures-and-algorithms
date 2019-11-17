import React, { ReactNode } from 'react';

import SideMenu from '../SideMenu';
import BrandLogo from '../BrandLogo';
import Menu from '../Menu';

import './style.scss';

type Props = {
  children: ReactNode;
};


const AppLayout= ({ children }: Props) => {

  return (
    <div className="app-container">
      <SideMenu>
        <BrandLogo brandName="Data Structures & Algorithms" />
        <Menu />
      </SideMenu>
      <div className="app-content-container">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
