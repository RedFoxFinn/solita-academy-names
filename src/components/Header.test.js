import { render, screen } from '@testing-library/react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import uuid from 'uuid';

import App from '../App';
import Header from './Header';

describe('Header', () => {
  const appId = uuid;
  beforeEach(() => render(<App id={appId}/>));
  test('Header renders', () => {
    const header = screen.queryByTestId(`${appId}-header`);
    expect(header).toBeTruthy();
    isCompositeComponentWithType(header, Header);
  });
  test('Header has correct text content', () => {
    const p1 = screen.queryByTestId(`${appId}-header-appName`);
    const p2 = screen.queryByTestId(`${appId}-header-authorName`);
    expect(p1).toBeTruthy();
    expect(p1.textContent).toContain('Names');
    expect(p2).toBeTruthy();
    expect(p2.textContent).toContain('RedFoxFinn');
  });
});