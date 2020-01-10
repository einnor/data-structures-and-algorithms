import React, { useState, ReactNode, ChangeEvent } from 'react';

import { AppLayout, Tabs, TabPanel, TextInput, Button, BarChart, LineChart, SelectInput } from '../../components';
import { BubbleSort, InsertionSort, SelectionSort, MergeSort, QuickSort } from '../../lib/Sorting/Algorithms';
import { ISort } from '../../lib/Sorting/@types';
import { ITab } from '../../@types';

import './style.scss';

const tabs: ITab[] = [
  { text: 'Bar Graph', value: 'bar-chart' },
  { text: 'Line Graph', value: 'line-chart' },
];

const orderOptions = [
  { key: 'sorted', text: 'Sorted', value: 'sorted' },
  { key: 'random', text: 'Random', value: 'random' },
];

const operationOptions = [
  { key: 'comparisons', text: 'Comparisons', value: 'comparisons' },
  { key: 'swaps', text: 'Swaps', value: 'swaps' },
];

type State = {
  size: string;
  order: 'sorted' | 'random';
  operation: 'comparisons' | 'swaps';
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
    operation: 'comparisons',
    selectedTab: 'bar-chart',
    data: [],
  });

  const onSwitch = (value: string) => setState({ ...state, selectedTab: value, order: 'sorted', size: '10', data: [] });

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const onSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

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

  const drawBarChart = () => {};

  const drawLineChart = () => {};

  return (
    <AppLayout>
      <>
        <Tabs tabs={tabs} onSwitch={onSwitch} />
        <TabPanel content={switchContent()} />
        <div className="form">
          <TextInput type="number" name="size" label="Item Count" value={state.size} onChange={(e: ChangeEvent<HTMLInputElement>): void => onChange(e)} />
          <SelectInput name="order" label="Data Order" data={orderOptions} active={state.order} onChange={(e: ChangeEvent<HTMLSelectElement>): void => onSelect(e)} />
          <SelectInput name="operation" label="Operation" data={operationOptions} active={state.operation} onChange={(e: ChangeEvent<HTMLSelectElement>): void => onSelect(e)} />
          {
            state.selectedTab === 'bar-chart' ? (
              <Button onClick={drawBarChart} text="Draw Chart" type="primary" />
              ) : state.selectedTab === 'line-chart' ? (
                <Button onClick={drawLineChart} text="Draw Chart" type="primary" />
              ) : null
          }
        </div>
      </>
    </AppLayout>
  )
};

export default SortingPerformance;
