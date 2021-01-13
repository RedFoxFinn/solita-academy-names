import React from 'react';

import styles from '../tools/styles';
import enums from '../tools/enums';

    // Sort is the component that'll display the sorting functionalities of the name/amount-pairs
    // if the data has been fetched. Sort has four sorting options to use, two by name and two by amount.
    // Name and amount options have both ascending and descending options.

const Sort = ({id, setSorting}) => <div id={id} data-testid={id} style={styles.inline()} >
    <div style={styles.sortings()} >
        <div style={styles.inline()} >
            <p style={styles.textL()} >Sort</p>
            <p style={styles.authorName()} >by name</p>
        </div>
        <button id={`${id}-nameAscending`} data-testid={`${id}-nameAscending`} style={styles.sortingButton()} onClick={() => setSorting(enums.sorting.AtoZ)}>Name, &#8593;</button>
        <button id={`${id}-nameDescending`} data-testid={`${id}-nameDescending`} style={styles.sortingButton()} onClick={() => setSorting(enums.sorting.ZtoA)}>Name, &#8595;</button>
    </div>
    <div style={styles.sortings()} >
        <div style={styles.inline()} >
            <p style={styles.textL()} >Sort</p>
            <p style={styles.authorName()} >by amount</p>
        </div>
        <button id={`${id}-amountAscending`} data-testid={`${id}-amountAscending`} style={styles.sortingButton()} onClick={() => setSorting(enums.sorting.AMOUNT_ASC)}>Amount, &#8593;</button>
        <button id={`${id}-amountDescending`} data-testid={`${id}-amountDescending`} style={styles.sortingButton()} onClick={() => setSorting(enums.sorting.AMOUNT_DES)}>Amount, &#8595;</button>
    </div>
</div>;

export default Sort;