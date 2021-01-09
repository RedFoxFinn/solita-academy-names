
// Author:              Antti Aarnio || RedFoxFinn
// Project:             solita_academy_names
// Description:         Solita Dev Academy programming assignment prior to applying
// File:                Header.jsx
// File description:    enums is a self-made and simple tool that provides enum-like functionality to application.

// Object definitions
// fetch provides status messages for the data fetching status display.
// sorting provides status & mode messages for the data sorting functionalities.

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

// Defining the enums exporting

export default {
    fetch, sorting
};