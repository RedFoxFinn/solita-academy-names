
import React, {useState} from 'react';

import fetchService from './tools/fetchService';

const App = () => {
  return <div style={{display: 'flex', flexDirection: 'column'}}>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
      <AppName/>
      <Author/>
    </div>
  </div>;
};

const AppName = () => {
  return <p style={{fontSize: '3em'}}>Names</p>;
};

const Author = () => {
  return <p style={{fontSize: '1em'}}>by RedFoxFinn</p>;
};

export default App;
