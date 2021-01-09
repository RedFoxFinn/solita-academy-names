
// Author:      Antti Aarnio || RedFoxFinn
// Project:     solita_academy_names
// Description: Solita Dev Academy programming assignment prior to applying
// File:        List.jsx

// imports

import React, {useState} from 'react';

import styles from '../tools/styles';
import enums from '../tools/enums';
import Person from './Person';
import status from './Status';

// Defining the component

const List = (props) => {
    let names = props.names;
    const [results, setResults] = useState(null);

    //   Helper functions for sorting the received data

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

    //   Defining the subcomponents
    //   Length displays the count of entries on received data.
    //   TotalAmount displays the sum of the amounts on name/amount-pairs of the data.
    //   Names is the subcomponent that displays the list of name/amount-pairs of the data or the search results
    // or the status message if the search didn't find any matches.

    const Length = ({id}) => {
        return <div id={id} style={styles.inline()}>
            <p style={styles.success()}>Total amount of names: <strong>{names.length}</strong></p>
        </div>;
    };

    const TotalAmount = ({id}) => {
        let total = 0;
        names.forEach(name => {
            total += name.amount;
        });
        return <div id={id} style={styles.inline()}>
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
            return results.length > 0 
                ? <ul id={`${props.id}-searchResults`} style={styles.platform()}>
                    {results.map(person => <Person name={person.name} amount={person.amount} />)}
                </ul> 
                : <status.NoResults id={`${props.id}-noResults`}/>;
        } else {
            return (
                <ul id={`${props.id}-namesList`} style={styles.platform()}>
                    {names.map(person => <Person name={person.name} amount={person.amount} />)}
                </ul>
            );
        }
    };

    //   Helper functions for searching amount from name/amount -pairs by the given string (name or part of a name)
    //   handleSearch-function executes the actual searching. resetSearch-function executes the actual reset.

    const handleSearch = () => {
        setResults([]);
        const search = document.getElementById('sda-names-list-search-searchByName').value;
        const res = names.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));
        setResults(res);
    };

    const resetSearch = () => {
        document.getElementById('sda-names-list-search-searchByName').value = '';
        setResults(null);
    };

    //   Defining the subcomponent, Search. Rendered as header row, text input and two buttons. 
    //   Header row consists of two text elements with different styles.
    //   Input is used for searching certain amounts, by name.
    //   searchAmounts-button executes the search. resetSearch-button resets the search.

    const Search = ({id}) => <div id={id} style={styles.platform()} >
        <div id={`${id}-header`} style={styles.inline()} >
            <p style={styles.textL()} >Search</p>
            <p style={styles.authorName()} >by name</p>
        </div>
        <div id={`${id}-searchBar`} style={styles.inline()} >
            <input id={`${id}-searchByName`} type='text' style={styles.searchField()} 
                placeholder='type name for search' />
            <input id={`${id}-searchAmounts`} type='button' style={styles.searchButtons()} 
                value='search amounts' onClick={() => handleSearch()} />
            <input id={`${id}-resetSearch`} type='button' style={styles.searchButtons()} 
                value='reset search' onClick={() => resetSearch()} />
        </div>
    </div>;

    //   Returned element for the rendering

    return props.names && <div id={props.id} style={styles.platform()}>
        <Length id={`${props.id}-datasetSize`} />
        <TotalAmount id={`${props.id}-totalAmount`} />
        <Search id={`${props.id}-search`} />
        <Names />
    </div>;
};

//   Defining the component exporting

export default List;