import React, { useState, ReactNode, ChangeEvent } from 'react';

import { AppLayout, Tabs, TabPanel, TextInput, Button } from '../../components';
import { SelectionSort } from '../../lib/Sorting/Algorithms';
import { ISort } from '../../lib/Sorting/@types';
import { ITab } from '../../@types';

import './style.scss';

const tabs: ITab[] = [
  { text: 'Enter Input', value: 'enter-input' },
  { text: 'Generate Ordered Input', value: 'generate-ordered-input' },
  { text: 'Generate Random Input', value: 'generate-random-input' },
];

type State = {
  value: string;
  size: string;
  selectedTab: string;
  results: number [];
  swaps: number;
  comparisons: number;
};

const SelectionSortImplementation = () => {

  const selectionSort: ISort = new SelectionSort();

  const [state, setState] = useState<State>({
    value: '',
    size: '10',
    selectedTab: 'enter-input',
    results: [],
    swaps: 0,
    comparisons: 0,
  });

  const onSwitch = (value: string) => setState({ ...state, selectedTab: value, value: '', size: '10', swaps: 0, comparisons: 0, results: [] });

  const sort = (): void => {
    const { value } = state;
    if (!value) {
      return;
    }

    const input = value.split(',').map((item) => parseInt(item, 10));
    selectionSort.set(input);
    setState({ ...state, results: selectionSort.sort(), swaps: selectionSort.swaps, comparisons: selectionSort.comparisons });
  }

  const switchContent = (): ReactNode => {
    const { selectedTab } = state;
    switch (selectedTab) {
      case 'enter-input':
        return showForm(sort, 'Sort List');
      case 'generate-ordered-input':
        return showForm(sort, 'Sort List', true, true);
      case 'generate-random-input':
        return showForm(sort, 'Sort List', true, true);
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

  const generateOrderedList = () => {
    setState({ ...state, value: selectionSort.generateOrderedList(parseInt(state.size, 10)).join(',') });
  }

  const generateRandomList = () => {
    setState({ ...state, value: selectionSort.generateRandomList(parseInt(state.size, 10)).join(',') });
  }

  const showForm = (fn: () => void, label: string, showValueInput: boolean = true, showSizeInput: boolean = false): ReactNode => (
    <>
      <div className="form">
        {
          showValueInput ? (
            <TextInput type="text" name="value" label={showSizeInput ? 'Generated Input' : 'Enter comma separated values'} value={state.value} onChange={(e: ChangeEvent<HTMLInputElement>): void => onChange(e)} />
          ) : null
        }
        {
          showSizeInput ? (
            <TextInput type="number" name="size" label="Enter size of the list" value={state.size} onChange={(e: ChangeEvent<HTMLInputElement>): void => onChange(e)} />
          ) : null
        }
        {
          state.selectedTab === 'generate-ordered-input' ? (
            <Button onClick={generateOrderedList} text="Generate" type="default" />
            ) : state.selectedTab === 'generate-random-input' ? (
              <Button onClick={generateRandomList} text="Generate" type="default" />
            ) : null
        }
        <Button onClick={fn} text={label} type="primary" />
      </div>
      <div className="output-wrapper">
        <div className="output">
          Sorted List:
          &nbsp;
          {JSON.stringify(state.results)}
        </div>
        <div className="output">
          Swaps:
          &nbsp;
          {state.swaps}
        </div>
        <div className="output">
          Comparisons:
          &nbsp;
          {state.comparisons}
        </div>
      </div>
    </>
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
