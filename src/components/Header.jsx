import React from 'react';

import styles from '../tools/styles';

const Header = () => <div style={styles.inline()}>
    <AppName/>
    <Author/>
</div>;

const AppName = () => {
    return <p style={styles.appName()}>Names</p>;
};

const Author = () => {
    return <p style={styles.authorName()}>by RedFoxFinn</p>;
};

export default Header;