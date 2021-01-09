
// Author:      Antti Aarnio || RedFoxFinn
// Project:     solita_academy_names
// Description: Solita Dev Academy programming assignment prior to applying
// File:        App.js

// imports

import React, {useState} from 'react';

import Header from './components/Header';
import Viewer from './components/Viewer';
import styles from './tools/styles';

//   Defining the component
//   App returns for rendering the complete application.

const App = () => <div style={styles.platform()}>
  <Header id='sda-names-header'/>
  <Viewer id='sda-names-viewer'/>
</div>;

//   Defining the component exporting

export default App;
