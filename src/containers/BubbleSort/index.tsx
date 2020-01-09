import React, { useState, ReactNode, ChangeEvent } from 'react';

import { AppLayout, Tabs, TabPanel, TextInput, Button } from '../../components';
import { BubbleSort } from '../../lib/Sorting/Algorithms';
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
};

const BubbleSortImplementation = () => {

  const [state, setState] = useState<State>({
    value: 'sort',
    selectedTab: '',
    results: [],
  });

  const onSwitch = (value: string) => setState({ ...state, selectedTab: value });

  const sort = (): void => {
    const { value } = state;
    if (!value) {
      return;
    }

    const input = value.split(',').map((item) => parseInt(item, 10));
    const sort: ISort = new BubbleSort(input);
    setState({ ...state, results: sort.sort() });
  }

  const switchContent = (): ReactNode => {
    const { selectedTab } = state;
    switch (selectedTab) {
      case 'sort':
        return showForm(sort, 'Sort List');
      default:
        return (
          <>
            <h2 style={{ marginBottom: 20 }}>Bubble Sort ALgorithm</h2>
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
          <TextInput type="number" name="value" value={state.value} onChange={(e: ChangeEvent<HTMLInputElement>): void => onChange(e)} />
        ) : null
      }
      <Button onClick={fn} text={label} type="primary" />
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

export default BubbleSortImplementation;
