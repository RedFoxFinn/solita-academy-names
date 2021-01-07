import React, {useState} from 'react';

import styles from '../tools/styles';
import fetchService from '../tools/fetchService';
import enums from '../tools/enums';
import List from './List';
import status from './Status';

const Viewer = () => {
    const [fetchState, setFetchState] = useState(enums.fetch.STOPPED);
    const [names, setNames] = useState(null);

    const onFetch = () => {
        setFetchState(enums.fetch.RUNNING);
        try {
            fetchService.names().then((response) => setNames(response.data.names));
            setFetchState(enums.fetch.DONE);
        } catch (err) {
            setFetchState(enums.fetch.ERROR);
        }
    };

    const Fetch = () => <div style={styles.inline()}>
        <p style={styles.text()}>Fetch names?</p>
        <button onClick={() => onFetch()}>please do</button>
    </div>;

    return <div style={styles.platform()}>
        <Fetch/>
        {names == null && fetchState == enums.fetch.STOPPED && <status.Nope/>}
        {names == null && fetchState == enums.fetch.ERROR && <status.Error/>}
        {fetchState == enums.fetch.DONE && names && names != null && <List names={names}/>}
        {fetchState == enums.fetch.RUNNING && <status.Running/>}
    </div>;
};

export default Viewer;