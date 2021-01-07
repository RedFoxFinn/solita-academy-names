
import React, {useState} from 'react';

import Header from './components/Header';
import Viewer from './components/Viewer';

const App = () => {
  return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center'}}>
    <Header/>
    <Viewer/>
  </div>;
};

export default App;
