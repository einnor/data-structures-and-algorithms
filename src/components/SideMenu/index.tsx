import React, { ReactNode } from 'react';

import './style.scss';

type Props = {
  children: ReactNode;
};

const SideMenu = ({ children }: Props) => {
  return (
    <div className="side-menu-wrapper">
      <div className="side-menu">
        {children}
      </div>
    </div>
  );
};

export default SideMenu;
