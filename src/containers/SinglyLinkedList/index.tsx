import React, { useState, ReactNode, ChangeEvent } from 'react';

import { AppLayout, Tabs, TabPanel, TextInput, Button } from '../../components';
import NodeChain from '../../components/NodeChain';
import { default as LinkedList } from '../../lib/LinkedList/SinglyLinkedList';
import Node from '../../lib/LinkedList/Node';
import { ILinkedList, INode } from '../../lib/LinkedList/@types';
import { ITab } from '../../@types';

import './style.scss';

const tabs: ITab[] = [
  { text: 'Add First', value: 'add-first' },
  { text: 'Add Last', value: 'add-last' },
  { text: 'Add', value: 'add' },
  { text: 'Remove First', value: 'remove-first' },
  { text: 'Remove Last', value: 'remove-last' },
  { text: 'Remove', value: 'remove' },
  { text: 'Find', value: 'find' },
];

const linkedList: ILinkedList <number> = new LinkedList();
const node1: INode<number> = new Node({ value: 1, next: null });
const node2: INode<number> = new Node({ value: 2, next: null });
const node3: INode<number> = new Node({ value: 3, next: null });
linkedList.addFirst(node3);
linkedList.addFirst(node2);
linkedList.addFirst(node1);

type State = {
  value: string;
  index: string;
  selectedTab: string;
  foundIndex: number | undefined;
};

const SinglyLinkedList = () => {

  const [state, setState] = useState<State>({
    value: '',
    index: '',
    selectedTab: '',
    foundIndex: undefined,
  });

  const onSwitch = (value: string) => setState({ ...state, selectedTab: value });

  const resetState = () => setState({ ...state, value: '', index: '', foundIndex: undefined });

  const addFirst = (): void => {
    const { value } = state;
    if (!value) {
      return;
    }
    linkedList.addFirst(new Node({ value: parseInt(value, 10), next: null }));
    resetState();
  }

  const addLast = (): void => {
    const { value } = state;
    if (!value) {
      return;
    }
    linkedList.addLast(new Node({ value: parseInt(value, 10), next: null }));
    resetState();
  }

  const add = (): void => {
    const { value, index } = state;
    if (!value || !index) {
      return;
    }
    linkedList.add(new Node({ value: parseInt(value, 10), next: null }), parseInt(index, 10));
    resetState();
  }

  const removeFirst = (): void => {
    linkedList.removeFirst();
    resetState();
  }

  const removeLast = (): void => {
    linkedList.removeLast();
    resetState();
  }

  const remove = (): void => {
    const { index } = state;
    if (!index) {
      return;
    }

    linkedList.remove(parseInt(index, 0));
    resetState();
  }

  const find = (): void => {
    const { value } = state;
    if (!value) {
      return;
    }

    const index = linkedList.find(parseInt(value));
    setState({ ...state, foundIndex: index });
  }

  const switchContent = (): ReactNode => {
    const { selectedTab } = state;
    switch (selectedTab) {
      case 'add-first':
        return showForm(addFirst, 'Add First');
      case 'add-last':
        return showForm(addLast, 'Add Last');
      case 'add':
        return showForm(add, 'Add', true, true);
      case 'remove-first':
        return showForm(removeFirst, 'Remove First', false);
      case 'remove-last':
        return showForm(removeLast, 'Remove Last', false);
      case 'remove':
        return showForm(remove, 'Remove', false, true);
      case 'find':
        return showForm(find, 'Find');
      default:
        return (
          <>
            <h2 style={{ marginBottom: 20 }}>Singly Linked Lists</h2>
            <div>Select an action to get started</div>
          </>
        );
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const showForm = (fn: () => void, label: string, showValueInput = true, showIndexInput = false): ReactNode => (
    <div className="form">
      {
        showValueInput ? (
          <TextInput type="number" name="value" value={state.value} onChange={(e: ChangeEvent<HTMLInputElement>): void => onChange(e)} />
        ) : null
      }
      {
        showIndexInput ? (
          <TextInput type="number" name="index" value={state.index} onChange={(e: ChangeEvent<HTMLInputElement>): void => onChange(e)} />
        ) : null
      }
      <Button onClick={fn} text={label} type="primary" />
    </div>
  );

  const { foundIndex } = state;

  return (
    <AppLayout>
      <>
        <Tabs tabs={tabs} onSwitch={onSwitch} />
        <TabPanel content={switchContent()} />
        {
          linkedList.head ? (
            <div className="node-chain">
              <NodeChain index={0} node={linkedList.head} foundIndex={foundIndex} />
            </div>
          ) : null
        }
      </>
    </AppLayout>
  )
};

export default SinglyLinkedList;
