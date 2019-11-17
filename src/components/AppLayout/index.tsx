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
        <div className="menu-item-wrapper">
          <Menu />
        </div>
      </SideMenu>
      <div className="main-content-container">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
