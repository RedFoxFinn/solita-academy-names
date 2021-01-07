
const fetch = Object.freeze({
    DONE: 'done',
    ERROR: 'error',
    RUNNING: 'running',
    STOPPED: 'stopped'
});

const sorting = Object.freeze({
    AtoZ: 'AtoZ',
    ZtoA: 'ZtoA',
    ZEROtoNINE: '0to9',
    NINEtoZERO: '9to0'
});

export default {
    fetch, sorting
};