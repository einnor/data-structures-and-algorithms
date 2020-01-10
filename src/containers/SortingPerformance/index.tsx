import React, { useState, ReactNode } from 'react';

import { AppLayout, Tabs, TabPanel, TextInput, Button, BarChart, LineChart } from '../../components';
import { BubbleSort, InsertionSort, SelectionSort, MergeSort, QuickSort } from '../../lib/Sorting/Algorithms';
import { ISort } from '../../lib/Sorting/@types';
import { ITab } from '../../@types';

import './style.scss';

const tabs: ITab[] = [
  { text: 'Bar Graph', value: 'bar-chart' },
  { text: 'Line Graph', value: 'line-chart' },
];

type State = {
  size: string;
  order: 'sorted' | 'random';
  selectedTab: string;
  data: [];
};

const SortingPerformance = () => {

  const bubbleSort: ISort = new BubbleSort();
  const insertionSort: ISort = new InsertionSort();
  const selectionSort: ISort = new SelectionSort();
  const mergeSort: ISort = new MergeSort();
  const quickSort: ISort = new QuickSort();

  const [state, setState] = useState<State>({
    size: '10',
    order: 'sorted',
    selectedTab: 'bar-chart',
    data: [],
  });

  const onSwitch = (value: string) => setState({ ...state, selectedTab: value, order: 'sorted', size: '10', data: [] });

  const switchContent = (): ReactNode => {
    const { selectedTab } = state;
    switch (selectedTab) {
      case 'bar-chart':
        return (<BarChart />);
      case 'line-chart':
        return (<LineChart />);
      default:
        return (
          <>
            <h2 style={{ marginBottom: 20 }}>Performance of sorting algorithms</h2>
            <div>Select an action to get started</div>
          </>
        );
    }
  };

  return (
    <AppLayout>
      <>
        <Tabs tabs={tabs} onSwitch={onSwitch} />
        <TabPanel content={switchContent()} />
      </>
    </AppLayout>
  )
};

export default SortingPerformance;
