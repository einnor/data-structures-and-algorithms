import React from 'react';

import MenuItem from '../MenuItem';
import menuList from './menuList';
import { IMenuItem } from '../../@types';

import './style.scss';

const Menu = () => {
  return (
    <div className="menu-item-wrapper">
      {
        menuList.map((item: IMenuItem) => (<MenuItem item={item} />)
      )}
    </div>
  );
};

export default Menu;
