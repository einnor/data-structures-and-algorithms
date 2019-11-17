import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { withRouter, RouteComponentProps } from 'react-router';

import { IMenuItem } from '../../@types';

import './style.scss';

type Props = {
  item: IMenuItem;
};

const MenuItem = ({ item, history }: Props & RouteComponentProps) => {

  const [isOpen, setIsOpen] = useState(history.location.pathname.startsWith(item.path));

  const isActive = (path: string): boolean => history.location.pathname.startsWith(path);

  const handleItemClick = (item: IMenuItem): void => {
    if (!item.children) {
      setIsOpen(!isOpen);
    } else {
      history.push(item.path);
    }
  };

  return (
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
      <div className="plain-drop-down-content-wrapper">
        {
          isOpen && item.children ? item.children.map((child) => (
            <div
              className={`menu-item ${isActive(item.path) ? 'menu-item--active' : ''} menu-item--is-child`}
              onClick={() => handleItemClick(item)}
            >
              <div className="menu-item__left">
                {
                  item.icon ? (
                    <FontAwesomeIcon icon={faDotCircle} />
                  ) :
                  null
                }
                <span className="menu-item__left__text">{item.text}</span>
              </div>
              <span className="nested" />
            </div>
          )) : null
        }
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
