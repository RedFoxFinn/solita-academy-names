
// Author:      Antti Aarnio || RedFoxFinn
// Project:     solita_academy_names
// Description: Solita Dev Academy programming assignment prior to applying
// File:        Status.jsx

// imports

import React from 'react';

import styles from '../tools/styles';

//   Defining the status-components
//   Nope is the component that'll be shown if the data fetching isn't done yet.
//   Error is the component that'll be shown if the data fetching responds error.
//   Running is the component that'll be shown if the data fetching is being executed.
//   NoResults is the component thatäll be shown if the amount searching by the name doesn't find any matches.

const Nope = (props) => <div id={props.id} data-testid={props.id} style={{}}>
    <p style={styles.failure()}>You need to fetch the names . . .</p>
</div>;

const Error = (props) => <div id={props.id} data-testid={props.id} style={styles.platform()}>
    <p style={styles.failure()}>Error occured while fetching the names . . .</p>
    <p style={styles.failure()}>Please try again</p>
</div>;

const Running = (props) => <div id={props.id} data-testid={props.id} style={{}}>
    <p style={styles.running()}>Fetching the names . . .</p>
</div>;

const NoResults = (props) => <div id={props.id} data-testid={props.id} style ={{}}>
    <p style={styles.failure()} >With name '{props.name}' we couldn't find any results</p>
</div>;

//   Defining the component exporting.

export default {Nope, Error, Running, NoResults};