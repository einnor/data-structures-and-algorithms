import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../Home';

const App = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      {/* <Route path="/linked-lists" exact component={} /> */}
    </>
  );
};

export default App;