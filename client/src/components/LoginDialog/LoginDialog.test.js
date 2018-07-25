import React from 'react';
import ReactDOM from 'react-dom';
import LoginDialog from './LoginDialog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginDialog />, div);
  ReactDOM.unmountComponentAtNode(div);
});
