
const platform = () => {
    return {display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center'};
};

const inline = () => {
    return {display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center'};
};

const appName = () => {
    return {fontSize: '3em', color: 'black'};
};

const authorName = () => {
    return {fontSize: '1em', color: 'grey'};
};

const text = () => {
    return {fontSize: '1em', color: 'black'};
};

const success = () => {
    return {fontSize: '1,5em', color: 'forestgreen'};
};

const failure = () => {
    return {fontSize: '1,5em', color: '#dc4233'};
};

const running = () => {
    return {fontSize: '1,5em', color: 'darkblue'};
};

const selection = () => {
    return {fontSize: '1,5em', color: '#dc4233'}
};

const sortingButton = () => {
    return {width: '12em', height: '1,5em', outline: '1px solid #dc4233', border: '1px solid transparent', background: 'transparent'};
};

export default {
    appName, authorName, failure, inline, platform, running, selection, sortingButton, success, text
};