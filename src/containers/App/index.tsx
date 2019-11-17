import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../Home';
import SinglyLinkedList from '../SinglyLinkedList';

import '../../styles/base.scss';

const App = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/linked-lists/singly" exact component={SinglyLinkedList} />
    </>
  );
};

export default App;