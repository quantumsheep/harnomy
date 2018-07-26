import React from 'react';
import ReactDOM from 'react-dom';
import SignupDialog from './SignupDialog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignupDialog />, div);
  ReactDOM.unmountComponentAtNode(div);
});
