
const fetch = Object.freeze({
    DONE: 'done',
    ERROR: 'error',
    RUNNING: 'running',
    STOPPED: 'stopped'
});

const sorting = Object.freeze({
    AtoZ: 'by name, ascending',
    ZtoA: 'by name, descending',
    AMOUNT_ASC: 'by amount, ascending',
    AMOUNT_DES: 'by amount, descending'
});

export default {
    fetch, sorting
};