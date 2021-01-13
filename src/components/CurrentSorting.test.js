
import { render, screen } from '@testing-library/react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import uuid from 'uuid';

import CurrentSorting from './CurrentSorting';
import enums from '../tools/enums';

describe('CurrentSorting unit tests', () => {
    const appId = uuid;
    test('CurrentSorting renders', () => {
        const currentSorting = render(<CurrentSorting id={`${appId}`} sorting={enums.sorting.AtoZ} />);
        expect(currentSorting).toBeTruthy();
        isCompositeComponentWithType(currentSorting, CurrentSorting);
        expect(screen.queryByTestId(`${appId}`).textContent).toContain('Current sorting:');
        expect(screen.queryByTestId(`${appId}`).textContent).toContain(`${enums.sorting.AtoZ}`);
    });
});