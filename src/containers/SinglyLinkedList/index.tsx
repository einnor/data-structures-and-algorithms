import React, { useState, ReactNode, ChangeEvent } from 'react';

import { AppLayout, Tabs, TabPanel, TextInput, Button } from '../../components';
import NodeChain from './NodeChain';
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

const SinglyLinkedList = () => {

  const [selectedTab, setSelectedTab] = useState('');
  const [value, setValue] = useState('');
  const [rerenders, forceRerenders] = useState(0);

  const onSwitch = (value: string) => setSelectedTab(value);

  const addFirst = () => {
    linkedList.addFirst(new Node({ value: parseInt(value, 10), next: null }));
    forceRerenders(rerenders + 1);
    setValue('');
  }

  const switchContent = (): ReactNode => {
    switch (selectedTab) {
      case 'add-first':
        return addFirstPanel();
      default:
        return (
          <div>Select an action to get started</div>
        );
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setValue(value);
  };

  const addFirstPanel = (): ReactNode => (
    <div className="form">
      <TextInput type="number" value={value} onChange={(e: ChangeEvent<HTMLInputElement>): void => onChange(e)} />
      <Button onClick={() => addFirst()} text="Add Node" />
    </div>
  )

  return (
    <AppLayout>
      <>
        <Tabs tabs={tabs} onSwitch={onSwitch} />
        <TabPanel content={switchContent()} />
        {
          linkedList.head ? (
            <div className="node-chain">
              <NodeChain node={linkedList.head} />
            </div>
          ) : null
        }
      </>
    </AppLayout>
  )
};

export default SinglyLinkedList;
