import React from 'react';

import styles from '../tools/styles';

const Person = (props) => {
    return <li id={props.name + props.amount} style={styles.person()} title={`Name: ${props.name}\n Amount: ${props.amount}`} >
        <p style={styles.personName()}>{props.name}</p>
        <p style={styles.authorName()}>{props.amount}</p>
    </li>;
};

export default Person;