import React, { useState, ReactNode, ChangeEvent } from 'react';

import { AppLayout, Tabs, TabPanel, TextInput, Button } from '../../components';
import BinarySearchTree from '../../lib/Tree/BinarySearchTree';
import Node from '../../lib/Tree/Node';
import { IBinarySearchTree, INode } from '../../lib/Tree/@types';
import { ITab } from '../../@types';
import Tree from './Tree';

import './style.scss';

const tabs: ITab[] = [
  { text: 'Add', value: 'add' },
  { text: 'Remove', value: 'remove' },
  { text: 'Find', value: 'find' },
  { text: 'Find With Parent', value: 'findWithParent' },
  { text: 'Traverse', value: 'traverse' },
];

const bst: IBinarySearchTree <number> = new BinarySearchTree();
const node1: INode <number> = new Node({ value: 4 });
const node2: INode <number> = new Node({ value: 2 });
const node3: INode <number> = new Node({ value: 1 });
const node4: INode <number> = new Node({ value: 3 });
const node5: INode <number> = new Node({ value: 6 });
const node6: INode <number> = new Node({ value: 5 });
const node7: INode <number> = new Node({ value: 7 });
bst.add(node1);
bst.add(node2);
bst.add(node3);
bst.add(node4);
bst.add(node5);
bst.add(node6);
bst.add(node7);

type State = {
  value: string;
  selectedTab: string;
  returnedValue: INode <number> | { node: INode <number> | null, parent: INode <number> | undefined } | number [] | undefined;
  traversal: 'pre' | 'in' | 'post';
};

const BinarySearchTreeImplementation = () => {

  const [state, setState] = useState<State>({
    value: '',
    selectedTab: '',
    returnedValue: undefined,
    traversal: 'pre',
  });

  const onSwitch = (value: string) => setState({ ...state, selectedTab: value, returnedValue: undefined, value: '' });

  const resetState = () => setState({ ...state, value: '', returnedValue: undefined });

  const add = (): void => {
    const { value } = state;
    if (!value) {
      return;
    }
    bst.add({ value: parseInt(value, 10) });
    resetState();
  }

  const find = (): void => {
    const { value } = state;
    if (!value) {
      return;
    }
    const node = bst.find(parseInt(value, 10));
    setState({ ...state, returnedValue: node });
  }

  const findWithParent = (): void => {
    const { value } = state;
    if (!value) {
      return;
    }
    const node = bst.findWithParent(parseInt(value, 10));
    setState({ ...state, returnedValue: node });
  }

  const remove = (): void => {
    const { value } = state;
    if (!value) {
      return;
    }
    const node = bst.remove(parseInt(value, 10));
    setState({ ...state, returnedValue: node });
  }

  const onTraverse = (traversal: 'pre' | 'in' | 'post') => {
    setState({ ...state, traversal });
    traverse();
  }

  const traverse = (): void => {
    const { traversal } = state;
    const result = bst.traverse(traversal);
    setState({ ...state, returnedValue: result });
  }

  const switchContent = (): ReactNode => {
    const { selectedTab } = state;
    switch (selectedTab) {
      case 'add':
        return showForm(add, 'Add');
      case 'find':
        return showForm(find, 'Find', false);
      case 'findWithParent':
        return showForm(findWithParent, 'Find With Parent', false);
      case 'remove':
        return showForm(remove, 'Remove', false);
      case 'traverse':
        return showTraversePanel();
      default:
        return (
          <>
            <h2 style={{ marginBottom: 20 }}>Binary Search Trees</h2>
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
      {
        state.returnedValue ? (
        <div className="output">{JSON.stringify(state.returnedValue)}</div>
        ) : null
      }
    </div>
  );

  const showTraversePanel = (): ReactNode => (
    <div className="form">
      {
        ['pre', 'in', 'post'].map((traversal) => (
          <Button active={traversal === state.traversal ? true : false} onClick={() => onTraverse(traversal === 'post' ? 'post' : traversal === 'in' ? 'in' : 'pre')} text={traversal.toUpperCase()} type="primary" />
        ))
      }
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
        <div className="bst-container">
          <div className="tree">
            <Tree root={bst.root} isRoot={true} />
          </div>
        </div>
      </>
    </AppLayout>
  )
};

export default BinarySearchTreeImplementation;
