import axios from 'axios';

const fetchNames = () => axios.get('https://raw.githubusercontent.com/solita/dev-academy-2021/main/names.json');

export default {names: fetchNames};