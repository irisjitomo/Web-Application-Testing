import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { add } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('to see if add works', () => {
  expect(add(1,2)).toBe(4);
});
