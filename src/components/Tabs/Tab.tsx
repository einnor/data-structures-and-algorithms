import React from 'react';
import { ITab } from '../../@types';

type Props = {
  tab: ITab;
  onSwitch: (value: string) => void;
  isActive: boolean;
};

const Tab = (props: Props) => {

  const onSwitch = () => props.onSwitch(props.tab.value);

  return (
    <button className={`tab ${props.isActive ? 'active' : ''}`} tabIndex={0} onClick={() => onSwitch()}>
      {props.tab.text}
    </button>
  )
};

export default Tab;
