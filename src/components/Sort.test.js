
import { render, screen } from '@testing-library/react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import uuid from 'uuid';

import Sort from './Sort';

describe('Sort', () => {
    const appId = uuid;
    test('Sort renders', () => {
        const sort = render(<Sort id={`${appId}`} setSorting={() => console.log('mock')} />);
        expect(sort).toBeTruthy();
        isCompositeComponentWithType(sort, Sort);
        expect(screen.queryByTestId(`${appId}`).textContent).toContain('Sort');
        expect(screen.queryByTestId(`${appId}`).textContent).toContain('by name');
        expect(screen.queryByTestId(`${appId}`).textContent).toContain('by amount');
    });
});