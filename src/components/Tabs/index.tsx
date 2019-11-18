import React from 'react';

import { ITab } from '../../@types';
import './style.scss';

type Props = {
  tabs: ITab[];
};

const Tabs = ({ tabs }: Props) => {
  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        {
          tabs.map((tab) => (<Tab key={tab.value} tab={tab} />))
        }
      </div>
    </div>
  )
};

export default Tabs;
