import React from 'react';
import { ITab } from '../../@types';

type Props = {
  tab: ITab;
  onClick: (value: string) => void;
  isActive: boolean;
};

const Tab = ({ tab, onClick, isActive }: Props) => {

  const onSwitch = () => onClick(tab.value);

  return (
    <button className={`tab ${isActive ? 'active' : ''}`} tabIndex={0} onClick={() => onSwitch()}>
      {tab.text}
    </button>
  )
};

export default Tab;
