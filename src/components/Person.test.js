
import { render, screen } from '@testing-library/react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import uuid from 'uuid';

import Person from './Person';

describe('Person', () => {
    const appId = uuid;
    const name = uuid;
    const amount = Math.random() * 100;
    test('Person renders', () => {
        const person = render(<Person id={`${appId}`} name={`${name}`} amount={amount} />);
        expect(person).toBeTruthy();
        isCompositeComponentWithType(person, Person);
        expect(screen.queryByTestId(`${appId}`).textContent).toContain(`${name}`);
        expect(screen.queryByTestId(`${appId}`).textContent).toContain(`${amount}`);
    });
});