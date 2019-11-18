import React from 'react';
import { ITab } from '../../@types';

type Props = {
  tab: ITab;
  onClick: (value: string) => void;
};

const Tab = ({ tab, onClick }: Props) => {

  const onSwitch = () => onClick(tab.value);

  return (
    <button className="tab" tabIndex={0} onClick={() => onSwitch()}>
      {tab.text}
    </button>
  )
};

export default Tab;
