import React, { useState, ReactNode, ChangeEvent } from 'react';

import { AppLayout, Tabs, TabPanel, TextInput, Button } from '../../components';
import { BubbleSort } from '../../lib/Sorting/Algorithms';
import { ISort } from '../../lib/Sorting/@types';
import { ITab } from '../../@types';

import './style.scss';
import Sort from '../../lib/Sorting/Sort';

const tabs: ITab[] = [
  { text: 'Enter Input', value: 'enter-input' },
  { text: 'Generate Ordered Input', value: 'generate-ordered-input' },
  { text: 'Generate Random Input', value: 'generate-random-input' },
];

type State = {
  value: string;
  size: number;
  selectedTab: string;
  results: number [];
  swaps: number;
  comparisons: number;
};

const BubbleSortImplementation = () => {

  const bubbleSort: ISort = new BubbleSort();

  const [state, setState] = useState<State>({
    value: '',
    size: 10,
    selectedTab: 'enter-input',
    results: [],
    swaps: 0,
    comparisons: 0,
  });

  const onSwitch = (value: string) => setState({ ...state, selectedTab: value, value: '', size: 10, swaps: 0, comparisons: 0, results: [] });

  const sort = (): void => {
    const { value } = state;
    if (!value) {
      return;
    }

    const input = value.split(',').map((item) => parseInt(item, 10));
    bubbleSort.set(input);
    setState({ ...state, results: bubbleSort.sort(), swaps: bubbleSort.swaps, comparisons: bubbleSort.comparisons });
  }

  const switchContent = (): ReactNode => {
    const { selectedTab } = state;
    switch (selectedTab) {
      case 'enter-input':
        return showForm(sort, 'Sort List');
      case 'generate-ordered-input':
        return showForm(sort, 'Sort List');
      case 'generate-random-input':
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

  const generateOrderedList = () => {
    setState({ ...state, value: bubbleSort.generateOrderedList(state.size).join(',') });
  }

  const generateRandomList = () => {
    setState({ ...state, value: bubbleSort.generateRandomList(state.size).join(',') });
  }

  const showForm = (fn: () => void, label: string, showValueInput: boolean = true, showSizeInput: boolean = false): ReactNode => (
    <>
      <div className="form">
        {
          showValueInput ? (
            <TextInput type="text" name="value" label="Enter comma separated values" value={state.value} onChange={(e: ChangeEvent<HTMLInputElement>): void => onChange(e)} />
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
        {
          state.results ? (
          <div className="output">
            Sorted List:
            &nbsp;
            {JSON.stringify(state.results)}
          </div>
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

export default BubbleSortImplementation;
