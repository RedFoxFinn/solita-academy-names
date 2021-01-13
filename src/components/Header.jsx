
// Author:      Antti Aarnio || RedFoxFinn
// Project:     solita_academy_names
// Description: Solita Dev Academy programming assignment prior to applying
// File:        Header.jsx

// imports

import React from 'react';

import styles from '../tools/styles';

// Defining the component

const Header = (props) => <div id={props.id} data-testid={props.id} style={styles.inline()}>
    <p id={`${props.id}-appName`} data-testid={`${props.id}-appName`} style={styles.appName()}>Names</p>
    <p id={`${props.id}-authorName`} data-testid={`${props.id}-authorName`} style={styles.authorName()}>by RedFoxFinn</p>
</div>;

// Defining the component exporting

export default Header;