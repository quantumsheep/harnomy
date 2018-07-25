import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import config from '../../config';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar className="Navbar">
          <Typography variant="title" color="inherit" className="logo">
            {config.title}
          </Typography>
          <div>
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;