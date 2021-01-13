
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
import Sort from './Sort';
import CurrentSorting from './CurrentSorting';

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

    const Fetch = ({id}) => <div id={id} data-testid={id} style={styles.inline()}>
        <p style={styles.text()}>Fetch names?</p>
        <button id={`${id}-fetchButton`} data-testid={`${id}-fetchButton`} style={styles.fetchingButton()} onClick={() => onFetch()} >please do</button>
    </div>;

    //   Returned element for the rendering

    return <div id={props.id} data-testid={props.id} style={styles.platform()}>
        <Fetch id={`${props.id}-fetch`}/>
        {names == null && fetchState === enums.fetch.RUNNING && <status.Running id={`${props.id}-status-run`}/>}
        {names == null && fetchState === enums.fetch.STOPPED && <status.Nope id={`${props.id}-status-nope`}/>}
        {names == null && fetchState === enums.fetch.ERROR && <status.Error id={`${props.id}-status-err`}/>}
        {fetchState === enums.fetch.DONE && names && names != null && <Sort id={`${props.id}-sorting-selector`} setSorting={setSorting} />}
        {fetchState === enums.fetch.DONE && names && names != null && <CurrentSorting id={`${props.id}-sorting-current`} sorting={sorting} />}
        {fetchState === enums.fetch.DONE && names && names != null && <List id={`${props.id}-list`} names={names} sorting={sorting}/>}
    </div>;
};

//   Defining the component exporting

export default Viewer;