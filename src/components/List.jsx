
import React, {useState} from 'react';

import styles from '../tools/styles';
import enums from '../tools/enums';

const List = (props) => {
    const [sorting, setSorting] = useState();
    let names = props.names;
    
    const orderAtoZ = () => names.sort((a,b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
    const orderZtoA = () => names.sort((a,b) => b.name > a.name ? 1 : a.name > b.name ? -1 : 0);
    const order0to9 = () => names.sort((a,b) => a.amount > b.amount ? 1 : b.amount > a.amount ? -1 : 0);
    const order9to0 = () => names.sort((a,b) => b.amount > a.amount ? 1 : a.amount > b.amount ? -1 : 0);

    return props.names && <div style={styles.platform()}>
        def
        <Length nameCount={props.names.length}/>
        <Person name={props.names[0].name} amount={props.names[0].amount} />
    </div>;
};

const Length = (props) => {
    return <div style={styles.inline()}>
        <p style={styles.success()}>{props.nameCount} names were found</p>
    </div>
};

const Person = (props) => {
    return <div style={styles.inline()}>
        <p>{props.name}</p>
        <p>{props.amount}</p>
    </div>;
};

export default List;