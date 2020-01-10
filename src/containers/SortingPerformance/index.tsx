import React from 'react';

import { AppLayout, BarChart, LineChart } from '../../components';
import './style.scss';

const SortingPerformance = () => {

  return (
    <AppLayout>
      <>
        Sorting performance
        <BarChart />
        <LineChart />
      </>
    </AppLayout>
  )
};

export default SortingPerformance;
