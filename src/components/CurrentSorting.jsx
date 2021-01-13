import React from 'react';

import styles from '../tools/styles';

//   CurrentSorting is the subcomponent that'll display the current sorting of name/amount-pairs 
// if the data has been fetched.

const CurrentSorting = ({id, sorting}) => <div id={id} data-testid={id} style={styles.inline()}>
    <p style={styles.success()}>Current sorting: <strong>{sorting}</strong></p>
</div>;

export default CurrentSorting;