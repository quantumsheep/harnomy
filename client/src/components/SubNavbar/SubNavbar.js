import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './SubNavbar.css';

class SubNavbar extends Component {
  render() {
    return (
      <div className="SubNavbar">
        <Button color="inherit">Category 1</Button>
        <Button color="inherit">Category 2</Button>
        <Button color="inherit">Category 3</Button>
        <Button color="inherit">Category 4</Button>
        <Button color="inherit">Category 5</Button>
      </div>
    );
  }
}

export default SubNavbar;