import React, { useState, ReactNode, ChangeEvent } from 'react';

import { AppLayout, Tabs, TabPanel, TextInput, Button } from '../../components';
import PriorityQueue from '../../lib/Queue/PriorityQueue';
import { IQueue, IItem } from '../../lib/Queue/@types';
import { ITab } from '../../@types';

import './style.scss';

const tabs: ITab[] = [
  { text: 'Enqueue', value: 'enqueue' },
  { text: 'Peek', value: 'peek' },
  { text: 'Dequeue', value: 'dequeue' },
  { text: 'Clear', value: 'clear' },
];

const queue: IQueue <number> = new PriorityQueue();
queue.enqueue({ value: 1, priority: 1 });
queue.enqueue({ value: 2, priority: 2 });
queue.enqueue({ value: 3, priority: 3 });

type State = {
  value: string;
  priority: string;
  selectedTab: string;
  returnedValue: IItem <number> | undefined;
};

const PriorityQueueImplementation = () => {

  const [state, setState] = useState<State>({
    value: '',
    priority: '',
    selectedTab: '',
    returnedValue: undefined,
  });

  const onSwitch = (value: string) => setState({ ...state, selectedTab: value, returnedValue: undefined, value: '', priority: '' });

  const resetState = () => setState({ ...state, value: '', priority: '', returnedValue: undefined });

  const enqueue = (): void => {
    const { value, priority } = state;
    if (!value) {
      return;
    }
    queue.enqueue({ value: parseInt(value, 10), priority: parseInt(priority, 10) });
    resetState();
  }

  const peek = (): void => {
    const item = queue.peek();
    setState({ ...state, returnedValue: item });
  }

  const dequeue = (): void => {
    const item = queue.dequeue();
    setState({ ...state, returnedValue: item });
  }

  const clear = (): void => {
    queue.clear();
    resetState();
  }

  const switchContent = (): ReactNode => {
    const { selectedTab } = state;
    switch (selectedTab) {
      case 'enqueue':
        return showForm(enqueue, 'Enqueue', true, true);
      case 'peek':
        return showForm(peek, 'Peek', false);
      case 'dequeue':
        return showForm(dequeue, 'Dequeue', false);
      case 'clear':
        return showForm(clear, 'Clear', false);
      default:
        return (
          <>
            <h2 style={{ marginBottom: 20 }}>Priority Queues</h2>
            <div>Select an action to get started</div>
          </>
        );
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const showForm = (fn: () => void, label: string, showValueInput = true, showPriorityInput = false): ReactNode => (
    <div className="form">
      {
        showValueInput ? (
          <TextInput type="number" name="value" value={state.value} onChange={(e: ChangeEvent<HTMLInputElement>): void => onChange(e)} />
        ) : null
      }
      {
        showPriorityInput ? (
          <TextInput type="number" name="priority" value={state.priority} onChange={(e: ChangeEvent<HTMLInputElement>): void => onChange(e)} />
        ) : null
      }
      <Button onClick={fn} text={label} type="primary" />
      {
        state.returnedValue ? (
        <div className="output">{JSON.stringify(state.returnedValue)}</div>
        ) : null
      }
    </div>
  );

  return (
    <AppLayout>
      <>
        <Tabs tabs={tabs} onSwitch={onSwitch} />
        <TabPanel content={switchContent()} />
        <div className="queue-container">
          <div className="queue">
            {
              queue.enumerable().map((item, index) => (
                <div className="item" style={{ backgroundColor: `rgba(220, 0, 78, ${(queue.length - index) / queue.length})` }}>
                  <span className="value">{item.value}</span>
                  <span className="priority">{`{ p: ${item.priority} }`}</span>
                </div>
              ))
            }
          </div>
        </div>
      </>
    </AppLayout>
  )
};

export default PriorityQueueImplementation;
