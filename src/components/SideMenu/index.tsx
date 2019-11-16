import React, { ReactChildren } from 'react';

import './style.scss';

type Props = {
  children: ReactChildren;
};

const SideMenu = ({ children }: Props) => {
  return (
    <div className="side-menu">
      {children}
    </div>
  );
};

export default SideMenu;
