import { render, screen } from '@testing-library/react';
import { isCompositeComponent, isCompositeComponentWithType } from 'react-dom/test-utils';
import uuid from 'uuid';

import App from './App';
import Header from './components/Header';
import Viewer from './components/Viewer';

describe('App unit tests', () => {
  const appId = uuid;
  test('App renders', () => {
    const app = render(<App id={appId}/>);
    expect(app).toBeTruthy();
    isCompositeComponentWithType(app, App);
  });
  test('Header renders', () => {
    render(<App id={appId}/>);
    const header = screen.getByTestId(`${appId}-header`);
    expect(header).toBeTruthy();
    isCompositeComponentWithType(header, Header);
  });
  test('Viewer renders', () => {
    render(<App id={appId}/>);
    const viewer = screen.getByTestId(`${appId}-viewer`);
    expect(viewer).toBeTruthy();
    isCompositeComponentWithType(viewer, Viewer);
  });
});