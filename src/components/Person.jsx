import React from 'react';

import styles from '../tools/styles';

const Person = (props) => {
    return <li id={props.name + props.amount} style={styles.person()}>
        <p style={styles.appName()}>{props.name}</p>
        <p style={styles.authorName()}>{props.amount}</p>
    </li>;
};

export default Person;