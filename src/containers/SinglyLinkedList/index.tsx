import React, { useState } from 'react';

import { AppLayout, Tabs } from '../../components';
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

const SinglyLinkedList = () => {

  const [selectedTab, setSelectedTab] = useState('');

  const onSwitch = (value: string) => setSelectedTab(value);

  const linkedList: ILinkedList <number> = new LinkedList();
  const node1: INode<number> = new Node({ value: 1, next: null });
  const node2: INode<number> = new Node({ value: 2, next: null });
  const node3: INode<number> = new Node({ value: 3, next: null });
  linkedList.addFirst(node3);
  linkedList.addFirst(node2);
  linkedList.addFirst(node1);

  return (
    <AppLayout>
      <>
        <Tabs tabs={tabs} onSwitch={onSwitch} />
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
