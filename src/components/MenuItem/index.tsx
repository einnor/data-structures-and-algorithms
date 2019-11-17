import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { withRouter, RouteComponentProps } from 'react-router';

import { IMenuItem } from '../../@types';

import './style.scss';

type Props = {
  item: IMenuItem;
};

const MenuItem = ({ item, history }: Props & RouteComponentProps) => {

  const [isOpen, setIsOpen] = useState(history.location.pathname.startsWith(item.path));

  const isActive = (path: string): boolean => history.location.pathname === path;

  const handleItemClick = (item: IMenuItem): void => {
    if (Array.isArray(item.children)) {
      setIsOpen(!isOpen);
      return;
    }

    history.push(item.path);
  };

  return (
    <>
      <div
        className={`menu-item ${isActive(item.path) ? 'menu-item--active' : ''}`}
        onClick={() => handleItemClick(item)}
      >
        <div className="menu-item__left">
          {
            item.icon ? (
              <FontAwesomeIcon icon={item.icon} />
            ) :
            null
          }
          <span className="menu-item__left__text">{item.text}</span>
        </div>
        {
          item.children && item.children.length ? (
            <div className="menu-item__right">
              {
                isOpen ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )
              }
            </div>
          ) :
          null
        }
      </div>
      {
        isOpen && item.children ? item.children.map((child) => (
          <div
            key={child.text.replace(' ', '')}
            className={`menu-item ${isActive(child.path) ? 'menu-item--active' : ''} menu-item--is-child`}
            onClick={() => history.push(child.path)}
          >
            <div className="menu-item__left">
              <span className="menu-item__left__text">{child.text}</span>
            </div>
            <span className="nested" />
          </div>
        )) : null
      }
    </>
  );
};

export default withRouter(MenuItem);
