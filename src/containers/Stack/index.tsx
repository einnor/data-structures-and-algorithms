import React, { useState, ReactNode, ChangeEvent } from 'react';

import { AppLayout, Tabs, TabPanel, TextInput, Button } from '../../components';
import Stack from '../../lib/Stack/Stack';
import postfixAlgorithm from '../../lib/Stack/PostfixAlgorithm';
import { IStack, IItem } from '../../lib/Stack/@types';
import { ITab, IError } from '../../@types';

import './style.scss';

const tabs: ITab[] = [
  { text: 'Push', value: 'push' },
  { text: 'Peek', value: 'peek' },
  { text: 'Pop', value: 'pop' },
  { text: 'Clear', value: 'clear' },
  { text: 'Postfix Algorithm', value: 'postfix-algorithm' },
];

const stack: IStack <number> = new Stack();
stack.push({ value: 1 });
stack.push({ value: 2 });
stack.push({ value: 3 });

type State = {
  value: string;
  selectedTab: string;
  returnedValue: IItem <number> | undefined;
  pfaValue: number | IError | undefined;
};

const StackImplementation = () => {

  const [state, setState] = useState<State>({
    value: '',
    selectedTab: '',
    returnedValue: undefined,
    pfaValue: undefined,
  });

  const onSwitch = (value: string) => setState({ ...state, selectedTab: value, returnedValue: undefined, value: '', pfaValue: undefined });

  const resetState = () => setState({ ...state, value: '', returnedValue: undefined, pfaValue: undefined });

  const push = (): void => {
    const { value } = state;
    if (!value) {
      return;
    }
    stack.push({ value: parseInt(value, 10) });
    resetState();
  }

  const peek = (): void => {
    const item = stack.peek();
    setState({ ...state, returnedValue: item });
  }

  const pop = (): void => {
    const item = stack.pop();
    setState({ ...state, returnedValue: item });
  }

  const clear = (): void => {
    stack.clear();
    resetState();
  }

  const pfa = (): void => {
    const pfaValue = postfixAlgorithm(state.value);
    setState({ ...state, pfaValue });
  }

  const switchContent = (): ReactNode => {
    const { selectedTab } = state;
    switch (selectedTab) {
      case 'push':
        return showForm(push, 'Push');
      case 'peek':
        return showForm(peek, 'Peek', false);
      case 'pop':
        return showForm(pop, 'Pop', false);
      case 'clear':
        return showForm(clear, 'Clear', false);
      case 'postfix-algorithm':
        return showForm(pfa, 'Postfix Algorithm');
      default:
        return (
          <>
            <h2 style={{ marginBottom: 20 }}>Stacks</h2>
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
      {
        state.pfaValue ? (
        <div className="output">{JSON.stringify(state.pfaValue)}</div>
        ) : null
      }
    </div>
  );

  return (
    <AppLayout>
      <>
        <Tabs tabs={tabs} onSwitch={onSwitch} />
        <TabPanel content={switchContent()} />
        <div className="stack-container">
          <div className="stack">
            {
              stack.enumerable().map((item, index) => (
                <div className="item" style={{ backgroundColor: `rgba(220, 0, 78, ${(stack.length - index) / stack.length})` }}>{item.value}</div>
              ))
            }
          </div>
        </div>
      </>
    </AppLayout>
  )
};

export default StackImplementation;
