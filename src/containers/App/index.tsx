import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../Home';
import SinglyLinkedList from '../SinglyLinkedList';
import DoublyLinkedList from '../DoublyLinkedList';
import Stack from '../Stack';
import Queue from '../Queue';
import PriorityQueue from '../PriorityQueue';
import BinarySearchTree from '../BinarySearchTree';
import BubbleSort from '../BubbleSort';
import InsertionSort from '../InsertionSort';
import SelectionSort from '../SelectionSort';
import MergeSort from '../MergeSort';
import QuickSort from '../QuickSort';
import SortingPerformance from '../SortingPerformance';

import '../../styles/base.scss';

const App = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/linked-lists/singly" exact component={SinglyLinkedList} />
      <Route path="/linked-lists/doubly" exact component={DoublyLinkedList} />
      <Route path="/stacks" exact component={Stack} />
      <Route path="/queues/simple" exact component={Queue} />
      <Route path="/queues/priority" exact component={PriorityQueue} />
      <Route path="/binary-search-trees" exact component={BinarySearchTree} />
      <Route path="/sorting-algorithms/bubble-sort" exact component={BubbleSort} />
      <Route path="/sorting-algorithms/insertion-sort" exact component={InsertionSort} />
      <Route path="/sorting-algorithms/selection-sort" exact component={SelectionSort} />
      <Route path="/sorting-algorithms/merge-sort" exact component={MergeSort} />
      <Route path="/sorting-algorithms/quick-sort" exact component={QuickSort} />
      <Route path="/sorting-algorithms/performance" exact component={SortingPerformance} />
    </>
  );
};

export default App;