import React, { ReactNode } from 'react';

import './style.scss';

type Props = {
  content: ReactNode;
};

export default function TabPanel({ content }: Props) {
  return (
    <div className="tab-panel">
      {content}
    </div>
  )
}
