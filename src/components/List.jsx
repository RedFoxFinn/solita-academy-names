
import React, {useState} from 'react';

import styles from '../tools/styles';
import enums from '../tools/enums';
import Person from './Person';

const List = (props) => {
    let names = props.names;

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

        return (
            <ul id='namesList' style={styles.platform()}>
                {names.map(person => <Person name={person.name} amount={person.amount} />)}
            </ul>
        );
    };

    return props.names && <div style={styles.platform()}>
        <Length/>
        <TotalAmount/>
        <Names/>
    </div>;
};

export default List;