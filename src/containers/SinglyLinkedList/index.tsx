import React from 'react';

import { AppLayout } from '../../components';
import NodeChain from './NodeChain';
import { default as LinkedList } from '../../lib/LinkedList/SinglyLinkedList';
import Node from '../../lib/LinkedList/Node';
import { ILinkedList, INode } from '../../lib/LinkedList/@types';

const SinglyLinkedList = () => {
  const linkedList: ILinkedList <number> = new LinkedList();
  const node1: INode<number> = new Node({ value: 1, next: null });
  const node2: INode<number> = new Node({ value: 2, next: null });
  const node3: INode<number> = new Node({ value: 3, next: null });
  linkedList.addFirst(node3);
  linkedList.addFirst(node2);
  linkedList.addFirst(node1);

  return (
    <AppLayout>
      <div>
        Singly
      </div>
      {
        linkedList.head ? (
          <NodeChain node={linkedList.head} />
        ) : null
      }
    </AppLayout>
  )
};

export default SinglyLinkedList;
