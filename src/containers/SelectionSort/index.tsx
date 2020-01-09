import React, { useState, ReactNode, ChangeEvent } from 'react';

import { AppLayout, Tabs, TabPanel, TextInput, Button } from '../../components';
import { SelectionSort } from '../../lib/Sorting/Algorithms';
import { ISort } from '../../lib/Sorting/@types';
import { ITab } from '../../@types';

import './style.scss';

const tabs: ITab[] = [
  { text: 'Sort', value: 'sort' },
];

type State = {
  value: string;
  selectedTab: string;
  results: number [];
  swaps: number;
  comparisons: number;
};

const SelectionSortImplementation = () => {

  const [state, setState] = useState<State>({
    value: '',
    selectedTab: 'sort',
    results: [],
    swaps: 0,
    comparisons: 0,
  });

  const onSwitch = (value: string) => setState({ ...state, selectedTab: value });

  const sort = (): void => {
    const { value } = state;
    if (!value) {
      return;
    }

    const input = value.split(',').map((item) => parseInt(item, 10));
    const sort: ISort = new SelectionSort(input);
    setState({ ...state, results: sort.sort(), swaps: sort.swaps, comparisons: sort.comparisons });
  }

  const switchContent = (): ReactNode => {
    const { selectedTab } = state;
    switch (selectedTab) {
      case 'sort':
        return showForm(sort, 'Sort List');
      default:
        return (
          <>
            <h2 style={{ marginBottom: 20 }}>Selection Sort ALgorithm</h2>
            <div>Select an action to get started</div>
          </>
        );
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const showForm = (fn: () => void, label: string, showValueInput = true): ReactNode => (
    <div className="form">
      {
        showValueInput ? (
          <TextInput type="text" name="value" label="Enter comma separated values" value={state.value} onChange={(e: ChangeEvent<HTMLInputElement>): void => onChange(e)} />
        ) : null
      }
      <Button onClick={fn} text={label} type="primary" />
      {
        state.results ? (
        <div className="output">{JSON.stringify(state.results)}</div>
        ) : null
      }
      {
        state.swaps ? (
        <div className="output">
          Swaps:
          &nbsp;
          {state.swaps}
        </div>
        ) : null
      }
      {
        state.comparisons ? (
        <div className="output">
          Comparisons:
          &nbsp;
          {state.comparisons}
        </div>
        ) : null
      }
    </div>
  );

  return (
    <AppLayout>
      <>
        <Tabs tabs={tabs} onSwitch={onSwitch} />
        <TabPanel content={switchContent()} />
      </>
    </AppLayout>
  )
};

export default SelectionSortImplementation;
