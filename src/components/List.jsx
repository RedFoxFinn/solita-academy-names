
import React, {useState} from 'react';

import styles from '../tools/styles';
import enums from '../tools/enums';

const List = (props) => {
    const [sorting, setSorting] = useState(enums.sorting.AtoZ);

    const orderByNameAscending = () => {
        let namesCopy = props.names;
        namesCopy.sort((a,b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
        return <ul id='names-AtoZ'>
            {namesCopy.forEach(person => <Person name={person.name} amount={person.amount} />)}
        </ul>;
    };
    const orderByNameDescending = () => {
        let namesCopy = props.names;
        namesCopy.sort((a,b) => b.name > a.name ? 1 : a.name > b.name ? -1 : 0);
        return <ul id='names-ZtoA'>
            {namesCopy.forEach(person => <Person name={person.name} amount={person.amount} />)}
        </ul>;
    };
    const orderByAmountAscending = () => {
        let namesCopy = props.names;
        namesCopy.sort((a,b) => a.amount > b.amount ? 1 : b.amount > a.amount ? -1 : 0);
        return <ul id='names-AmountAscending'>
            {namesCopy.forEach(person => <Person name={person.name} amount={person.amount} />)}
        </ul>;
    };
    const orderByAmountDescending = () => {
        let namesCopy = props.names;
        namesCopy.sort((a,b) => b.amount > a.amount ? 1 : a.amount > b.amount ? -1 : 0);
        return <ul id='names-AmountDescending'>
            {namesCopy.forEach(person => <Person name={person.name} amount={person.amount} />)}
        </ul>;
    };

    const TotalAmount = () => {
        let total = 0;
        props.names.forEach(name => {
            total += name.amount;
        });
        return <div style={styles.inline()}>
            <p style={styles.success()}>Total amount from names: <strong>{total}</strong></p>
        </div>;
    };

    const CurrentSorting = () => <div style={styles.inline()}>
        <p style={styles.success()}>Current sorting: <strong>{sorting}</strong></p>
    </div>;

    return props.names && <div style={styles.platform()}>
        <button style={styles.sortingButton()} onClick={() => setSorting(enums.sorting.AtoZ)}>Name, &#8593;</button>
        <button style={styles.sortingButton()} onClick={() => setSorting(enums.sorting.ZtoA)}>Name, &#8595;</button>
        <button style={styles.sortingButton()} onClick={() => setSorting(enums.sorting.AMOUNT_ASC)}>Amount, &#8593;</button>
        <button style={styles.sortingButton()} onClick={() => setSorting(enums.sorting.AMOUNT_DES)}>Amount, &#8595;</button>
        <CurrentSorting/>
        <Length nameCount={props.names.length}/>
        <TotalAmount/>
        
    </div>;
};

const Length = (props) => {
    return <div style={styles.inline()}>
        <p style={styles.success()}>Total amount of names: <strong>{props.nameCount}</strong></p>
    </div>;
};

const Person = (props) => {
    return <li id={props.name} style={styles.inline()}>
        <p>{props.name}</p>
        <p>{props.amount}</p>
    </li>;
};

export default List;