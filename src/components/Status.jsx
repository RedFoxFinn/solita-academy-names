import React from 'react';

import styles from '../tools/styles';

const Nope = () => <div style={{}}>
    <p style={styles.failure()}>You need to fetch the names . . .</p>
</div>;

const Error = () => <div style={styles.platform()}>
    <p style={styles.failure()}>Error occured while fetching the names . . .</p>
    <p style={styles.failure()}>Please try again</p>
</div>;

const Running = () => <div style={{}}>
    <p style={styles.running()}>Fetching the names . . .</p>
</div>;

const NoResults = (props) => <div style ={{}}>
    <p style={styles.failure()} >With name '{props.name}' we couldn't find any results</p>
</div>;

export default {Nope, Error, Running, NoResults};