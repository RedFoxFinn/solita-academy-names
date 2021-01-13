
import { render, screen } from '@testing-library/react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import uuid from 'uuid';
import enums from '../tools/enums';

import List from './List';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖabcdefghijklmnopqrstuvwxyzåäö0123456789';

const generateName = (length) => {
    let name = '';
    for (let i = 0; i < length; i++) {
        name += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return name;
};

const generateNames = () => {
    let names = [];
    const name = generateName(7);
    const amount = Math.random() * 50;
    for (let i = 20; i > 0; i--) {
        names.push({name: name, amount: amount});
    }
    return names;
};

describe('List unit tests', () => {
    const appId = uuid;
    const names = generateNames();
    test('List renders', () => {
        const list = render(<List id={`${appId}`} sorting={enums.sorting.AtoZ} names={names} />);
        expect(list).toBeTruthy();
        isCompositeComponentWithType(list, List);
        const nameList = screen.queryByTestId(`${appId}-nameList-list`);
        expect(nameList).toBeTruthy();
        expect(nameList.textContent).toContain(names[Math.floor(Math.random() * names.length)].name);
        expect(nameList.textContent).toContain(names[Math.floor(Math.random() * names.length)].amount);
    });
});