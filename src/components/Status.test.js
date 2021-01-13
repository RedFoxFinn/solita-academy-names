
import { render, screen } from '@testing-library/react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import uuid from 'uuid';

import status from './Status';

describe('Status unit tests', () => {
    const appId = uuid;
    test('status.Nope renders', () => {
        const nope = render(<status.Nope id={`${appId}`} />);
        expect(nope).toBeTruthy();
        isCompositeComponentWithType(nope, status.Nope);
        expect(screen.queryByTestId(`${appId}`).textContent).toContain('You need to fetch the names');
    });
    test('status.Error renders', () => {
        const err = render(<status.Error id={`${appId}`} />);
        expect(err).toBeTruthy();
        isCompositeComponentWithType(err, status.Error);
        expect(screen.queryByTestId(`${appId}`).textContent).toContain('Error occured while fetching the names');
        expect(screen.queryByTestId(`${appId}`).textContent).toContain('Please try again');
    });
    test('status.Running renders', () => {
        const run = render(<status.Running id={`${appId}`} />);
        expect(run).toBeTruthy();
        isCompositeComponentWithType(run, status.Running);
        expect(screen.queryByTestId(`${appId}`).textContent).toContain('Fetching the names');
    });
    test('status.NoResults renders', () => {
        const nr = render(<status.NoResults id={`${appId}`} name={`${appId}`} />);
        expect(nr).toBeTruthy();
        isCompositeComponentWithType(nr, status.NoResults);
        expect(screen.queryByTestId(`${appId}`).textContent).toContain('With name');
        expect(screen.queryByTestId(`${appId}`).textContent).toContain(`${appId}`);
        expect(screen.queryByTestId(`${appId}`).textContent).toContain('we couldn\'t find any results');
    });
});