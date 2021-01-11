import { render, screen, fireEvent } from '@testing-library/react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import uuid from 'uuid';

import App from '../App';
import Viewer from './Viewer';

describe('Viewer', () => {
  const appId = uuid;
  beforeEach(() => render(<App id={appId}/>));
  test('Viewer renders', () => {
    const viewer = screen.queryByTestId(`${appId}-viewer`);
    expect(viewer).toBeTruthy();
    isCompositeComponentWithType(viewer, Viewer);
  });
  test('Viewer renders Fetch', () => {
    const fetch = screen.queryByTestId(`${appId}-viewer-fetch`);
    expect(fetch).toBeTruthy();
    expect(screen.queryByTestId(`${appId}-viewer-fetch`).textContent).toContain('Fetch names?');
    const fetchButton = screen.queryByTestId(`${appId}-viewer-fetch-fetchButton`);
    expect(fetchButton).toBeTruthy();
    expect(fetchButton.textContent).toContain('please do');
  });
});