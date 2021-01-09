
// Author:              Antti Aarnio || RedFoxFinn
// Project:             solita_academy_names
// Description:         Solita Dev Academy programming assignment prior to applying
// File:                fetchService.js
// File description:    fetchService is Axios based service for requesting data

// imports

import axios from 'axios';

// Function definitions
// fetchNames is the function for fetching the name/amount-pair data.

const fetchNames = () => axios.get('https://raw.githubusercontent.com/solita/dev-academy-2021/main/names.json');

// Defining the fetchService exporting

export default {names: fetchNames};