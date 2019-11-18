import React, { useState } from 'react';

import Tab from './Tab';
import { ITab } from '../../@types';

import './style.scss';

type Props = {
  tabs: ITab[];
  onSwitch: (value: string) => void;
};

const Tabs = (props: Props) => {

  const [selectedTab, setSelectedTab] = useState('');

  const onSwitch = (value: string) => {
    setSelectedTab(value);
    props.onSwitch(value);
  }

  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        {
          props.tabs.map((tab) => (<Tab key={tab.value} tab={tab} onSwitch={onSwitch} isActive={tab.value === selectedTab} />))
        }
      </div>
    </div>
  )
};

export default Tabs;
