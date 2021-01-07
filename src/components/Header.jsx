import React from 'react';

const Header = () => <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
    <AppName/>
    <Author/>
</div>;

const AppName = () => {
    return <p style={{fontSize: '3em'}}>Names</p>;
};

const Author = () => {
    return <p style={{fontSize: '1em'}}>by RedFoxFinn</p>;
};

export default Header;