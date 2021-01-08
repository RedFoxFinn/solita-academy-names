import React, {useState} from 'react';

import styles from '../tools/styles';
import fetchService from '../tools/fetchService';
import enums from '../tools/enums';
import List from './List';
import status from './Status';

const Viewer = () => {
    const [fetchState, setFetchState] = useState(enums.fetch.STOPPED);
    const [names, setNames] = useState(null);
    const [sorting, setSorting] = useState(enums.sorting.AtoZ);

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
        <button style={styles.fetchingButton()} onClick={() => onFetch()} >please do</button>
    </div>;

    const CurrentSorting = () => <div style={styles.inline()}>
        <p style={styles.success()}>Current sorting: <strong>{sorting}</strong></p>
    </div>;

    const Sort = () => <div style={styles.inline()} >
        <div style={styles.sortings()} >
            <div style={styles.inline()} >
                <p style={styles.textL()} >Sort by</p>
                <p style={styles.authorName()} >Name</p>
            </div>
            <button style={styles.sortingButton()} onClick={() => setSorting(enums.sorting.AtoZ)}>Name, &#8593;</button>
            <button style={styles.sortingButton()} onClick={() => setSorting(enums.sorting.ZtoA)}>Name, &#8595;</button>
        </div>
        <div style={styles.sortings()} >
            <div style={styles.inline()} >
                <p style={styles.textL()} >Sort by</p>
                <p style={styles.authorName()} >Amount</p>
            </div>
            <button style={styles.sortingButton()} onClick={() => setSorting(enums.sorting.AMOUNT_ASC)}>Amount, &#8593;</button>
            <button style={styles.sortingButton()} onClick={() => setSorting(enums.sorting.AMOUNT_DES)}>Amount, &#8595;</button>
        </div>
    </div>;

    const Search = () => {};

    return <div style={styles.platform()}>
        <Fetch/>
        {names == null && fetchState == enums.fetch.STOPPED && <status.Nope/>}
        {names == null && fetchState == enums.fetch.ERROR && <status.Error/>}
        {fetchState == enums.fetch.RUNNING && <status.Running/>}
        {fetchState == enums.fetch.DONE && names && names != null && <Sort/>}
        {fetchState == enums.fetch.DONE && names && names != null && <CurrentSorting/>}
        {fetchState == enums.fetch.DONE && names && names != null && <List names={names} sorting={sorting}/>}
    </div>;
};

export default Viewer;