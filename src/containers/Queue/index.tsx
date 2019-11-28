import React, { useState, ReactNode, ChangeEvent } from 'react';

import { AppLayout, Tabs, TabPanel, TextInput, Button } from '../../components';
import Queue from '../../lib/Queue/Queue';
import postfixAlgorithm from '../../lib/Stack/PostfixAlgorithm';
import { IQueue, IItem } from '../../lib/Queue/@types';
import { ITab, IError } from '../../@types';

import './style.scss';

const tabs: ITab[] = [
  { text: 'Enqueue', value: 'enqueue' },
  { text: 'Peek', value: 'peek' },
  { text: 'Dequeue', value: 'dequeue' },
  { text: 'Clear', value: 'clear' },
];

const queue: IQueue <number> = new Queue();
queue.enqueue({ value: 1 });
queue.enqueue({ value: 2 });
queue.enqueue({ value: 3 });

type State = {
  value: string;
  selectedTab: string;
  returnedValue: IItem <number> | undefined;
};

const QueueImplementation = () => {

  const [state, setState] = useState<State>({
    value: '',
    selectedTab: '',
    returnedValue: undefined,
  });

  const onSwitch = (value: string) => setState({ ...state, selectedTab: value, returnedValue: undefined, value: '' });

  const resetState = () => setState({ ...state, value: '', returnedValue: undefined });

  const enqueue = (): void => {
    const { value } = state;
    if (!value) {
      return;
    }
    queue.enqueue({ value: parseInt(value, 10) });
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
        return showForm(enqueue, 'Enqueue');
      case 'peek':
        return showForm(peek, 'Peek', false);
      case 'dequeue':
        return showForm(dequeue, 'Dequeue', false);
      case 'clear':
        return showForm(clear, 'Clear', false);
      default:
        return (
          <>
            <h2 style={{ marginBottom: 20 }}>Queues</h2>
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
          <TextInput type={state.selectedTab === 'postfix-algorithm' ? 'text' : 'number'} name="value" value={state.value} onChange={(e: ChangeEvent<HTMLInputElement>): void => onChange(e)} />
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
                <div className="item" style={{ backgroundColor: `rgba(220, 0, 78, ${(queue.length - index) / queue.length})` }}>{item.value}</div>
              ))
            }
          </div>
        </div>
      </>
    </AppLayout>
  )
};

export default QueueImplementation;
