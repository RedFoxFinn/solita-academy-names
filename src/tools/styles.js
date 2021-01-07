
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
    return {fontSize: '1,5em', color: 'green'};
};

const failure = () => {
    return {fontSize: '1,5em', color: 'red'};
};

const running = () => {
    return {fontSize: '1,5em', color: 'blue'};
};

export default {
    appName, authorName, failure, inline, platform, running, success, text
};