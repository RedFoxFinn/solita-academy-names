
import React, {useState} from 'react';

import fetchService from './tools/fetchService';

import Header from './components/Header';
import List from './components/List';

const App = () => {
  return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center'}}>
    <Header/>
    <List/>
  </div>;
};

export default App;
