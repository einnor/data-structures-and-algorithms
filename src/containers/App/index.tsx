import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../Home';
import SinglyLinkedList from '../SinglyLinkedList';
import DoublyLinkedList from '../DoublyLinkedList';
import Stack from '../Stack';

import '../../styles/base.scss';

const App = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/linked-lists/singly" exact component={SinglyLinkedList} />
      <Route path="/linked-lists/doubly" exact component={DoublyLinkedList} />
      <Route path="/stacks" exact component={Stack} />
    </>
  );
};

export default App;