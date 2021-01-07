
import React from 'react';

const List = (props) => {
    const names = props.names;

    return names ? <Yup/> : <Nope/>;
};

const Yup = () => {
    return <div style={{}}>
        <p style={{fontSize: '1,5em', color: 'green'}}>You have fetched the names . . .</p>
    </div>;
};

const Nope = () => <div style={{}}>
    <p style={{fontSize: '1,5em', color: 'red'}}>You need to fetch the names . . .</p>
</div>;

export default List;