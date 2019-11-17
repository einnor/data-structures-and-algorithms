import React from 'react';

import MenuItem from '../MenuItem';
import menuList from './menuList';
import { IMenuItem } from '../../@types';

import './style.scss';

const Menu = () => {
  return (
    <div className="menu-wrapper">
      {
        menuList.map((item: IMenuItem) => (<MenuItem key={item.id} item={item} />)
      )}
    </div>
  );
};

export default Menu;
