
import React, {useState} from 'react';

import styles from '../tools/styles';
import enums from '../tools/enums';
import Person from './Person';
import status from './Status';

const List = (props) => {
    let names = props.names;
    const [results, setResults] = useState(null);

    const orderByNameAscending = () => {
        names = names.sort((a,b) => a.name > b.name ? 1 : (b.name > a.name ? -1 : 0));
    };
    const orderByNameDescending = () => {
        names = names.sort((a,b) => b.name > a.name ? 1 : (a.name > b.name ? -1 : 0));
    };
    const orderByAmountAscending = () => {
        names = names.sort((a,b) => a.amount > b.amount ? 1 : (b.amount > a.amount ? -1 : 0));
    };
    const orderByAmountDescending = () => {
        names = names.sort((a,b) => b.amount > a.amount ? 1 : (a.amount > b.amount ? -1 : 0));
    };

    const Length = () => {
        return <div style={styles.inline()}>
            <p style={styles.success()}>Total amount of names: <strong>{names.length}</strong></p>
        </div>;
    };

    const TotalAmount = () => {
        let total = 0;
        names.forEach(name => {
            total += name.amount;
        });
        return <div style={styles.inline()}>
            <p style={styles.success()}>Total amount from names: <strong>{total}</strong></p>
        </div>;
    };

    const Names = () => {
        switch (props.sorting) {
            case enums.sorting.AtoZ: {
                orderByNameAscending();
                break;
            }
            case enums.sorting.ZtoA: {
                orderByNameDescending();
                break;
            }
            case enums.sorting.AMOUNT_ASC: {
                orderByAmountAscending();
                break;
            }
            case enums.sorting.AMOUNT_DES: {
                orderByAmountDescending();
                break;
            }
            default: {
                orderByNameAscending();
            }
        }

        if (results) {
            return results.length > 0 ? <ul id='searchResults' style={styles.platform()}>
                {results.map(person => <Person name={person.name} amount={person.amount} />)}
            </ul> : <status.NoResults/>;
        } else {
            return (
                <ul id='namesList' style={styles.platform()}>
                    {names.map(person => <Person name={person.name} amount={person.amount} />)}
                </ul>
            );
        }
    };

    const handleSearch = () => {
        setResults([]);
        const search = document.getElementById('searchByName').value;
        const res = names.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));
        setResults(res);
    };

    const resetSearch = () => {
        document.getElementById('searchByName').value = '';
        setResults(null);
    };

    const Search = () => <div id='searchBar' style={styles.platform()} >
        <div style={styles.inline()} >
            <p style={styles.textL()} >Search</p>
            <p style={styles.authorName()} >by name</p>
        </div>
        <div style={styles.inline()} >
            <input id='searchByName' type='text' style={styles.searchField()} placeholder='type name for search' />
            <input id='searchAmounts' type='button' style={styles.searchButtons()} value='search amounts' onClick={() => handleSearch()} />
            <input id='resetSearch' type='button' style={styles.searchButtons()} value='reset search' onClick={() => resetSearch()} />
        </div>
    </div>;

    return props.names && <div style={styles.platform()}>
        <Length/>
        <TotalAmount/>
        <Search/>
        <Names/>
    </div>;
};

export default List;