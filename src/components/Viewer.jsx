
// Author:      Antti Aarnio || RedFoxFinn
// Project:     solita_academy_names
// Description: Solita Dev Academy programming assignment prior to applying
// File:        Viewer.jsx

// imports

import React, {useState} from 'react';

import styles from '../tools/styles';
import fetchService from '../tools/fetchService';
import enums from '../tools/enums';
import List from './List';
import status from './Status';

//   Defining the component
//   Viewer is responsible of returning for rendering all the other components other than the application header.

const Viewer = (props) => {
    const [fetchState, setFetchState] = useState(enums.fetch.STOPPED);
    const [names, setNames] = useState(null);
    const [sorting, setSorting] = useState(enums.sorting.AtoZ);

    //   Helper function for fetching the json-data from Solita GitHub.
    //   onFetch uses fetchService, which is based on Axios HTTP-client.
    //   onFetch alters the fetchState on executing and after the fetchService returns the response.
    //   Based on the fetchState, correct status-component will be shown.

    const onFetch = () => {
        setFetchState(enums.fetch.RUNNING);
        try {
            fetchService.names().then((response) => setNames(response.data.names));
            setFetchState(enums.fetch.DONE);
        } catch (err) {
            setFetchState(enums.fetch.ERROR);
        }
    };

    //   Defining the subcomponents
    //   Fetch is the subcomponent that'll be used for fetching the data. It uses onFetch-function to do so.
    //   CurrentSorting is the subcomponent that'll display the current sorting of name/amount-pairs 
    // if the data has been fetched.
    //   Sort is the subcomponent that'll display the sorting functionalities of the name/amount-pairs
    // if the data has been fetched. Sort has four sorting options to use, two by name and two by amount.
    // Name and amount options have both ascending and descending options.

    const Fetch = ({id}) => <div id={id} style={styles.inline()}>
        <p style={styles.text()}>Fetch names?</p>
        <button style={styles.fetchingButton()} onClick={() => onFetch()} >please do</button>
    </div>;

    const CurrentSorting = ({id}) => <div id={id} style={styles.inline()}>
        <p style={styles.success()}>Current sorting: <strong>{sorting}</strong></p>
    </div>;

    const Sort = ({id}) => <div id={id} style={styles.inline()} >
        <div style={styles.sortings()} >
            <div style={styles.inline()} >
                <p style={styles.textL()} >Sort</p>
                <p style={styles.authorName()} >by name</p>
            </div>
            <button style={styles.sortingButton()} onClick={() => setSorting(enums.sorting.AtoZ)}>Name, &#8593;</button>
            <button style={styles.sortingButton()} onClick={() => setSorting(enums.sorting.ZtoA)}>Name, &#8595;</button>
        </div>
        <div style={styles.sortings()} >
            <div style={styles.inline()} >
                <p style={styles.textL()} >Sort</p>
                <p style={styles.authorName()} >by amount</p>
            </div>
            <button style={styles.sortingButton()} onClick={() => setSorting(enums.sorting.AMOUNT_ASC)}>Amount, &#8593;</button>
            <button style={styles.sortingButton()} onClick={() => setSorting(enums.sorting.AMOUNT_DES)}>Amount, &#8595;</button>
        </div>
    </div>;

    //   Returned element for the rendering

    return <div id={props.id} style={styles.platform()}>
        <Fetch id='sda-names-fetch'/>
        {names == null && fetchState === enums.fetch.STOPPED && <status.Nope id='sda-names-status-nope'/>}
        {names == null && fetchState === enums.fetch.ERROR && <status.Error id='sda-names-status-err'/>}
        {fetchState === enums.fetch.RUNNING && <status.Running id='sda-names-status-run'/>}
        {fetchState === enums.fetch.DONE && names && names != null && <Sort id='sda-names-sorting-selector'/>}
        {fetchState === enums.fetch.DONE && names && names != null && <CurrentSorting id='sda-names-sorting-current'/>}
        {fetchState === enums.fetch.DONE && names && names != null && <List id='sda-names-list' names={names} sorting={sorting}/>}
    </div>;
};

//   Defining the component exporting

export default Viewer;