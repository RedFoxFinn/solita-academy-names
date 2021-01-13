
// Author:      Antti Aarnio || RedFoxFinn
// Project:     solita_academy_names
// Description: Solita Dev Academy programming assignment prior to applying
// File:        Person.jsx

// imports

import React from 'react';

import styles from '../tools/styles';

//   Defining the component
//   Essentially Person is a list item with styles

const Person = (props) => <li id={props.id} data-testid={props.id} key={`${props.id}-${props.name}`} style={styles.person()} 
  title={`Name: ${props.name}\n Amount: ${props.amount}`} >
  <p key={`${props.id}-name`} style={styles.personName()}>{props.name}</p>
  <p key={`${props.id}-amount`} style={styles.authorName()}>{props.amount}</p>
</li>;

//   Defining the component exporting

export default Person;