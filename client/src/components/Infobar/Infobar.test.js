import React from 'react';
import ReactDOM from 'react-dom';
import Infobar from './Infobar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Infobar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
