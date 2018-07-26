import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import config from '../../config';
import './Navbar.css';
import LoginDialog from '../LoginDialog/LoginDialog';
import SignupDialog from '../SignupDialog/SignupDialog';

class Navbar extends Component {
  state = {
    dialogLoginOpen: false,
    dialogSignupOpen: false
  }

  render() {
    return (
      <div>
        <AppBar position="static" color="default" className="NavbarContainer">
          <Toolbar variant="dense" className="Navbar">
            <Typography variant="title" color="inherit" className="logo">
              {config.title}
            </Typography>
            <div>
              <Button color="inherit" onClick={() => this.setState({ dialogLoginOpen: true })}>Login</Button>
            </div>
          </Toolbar>
        </AppBar>
        <LoginDialog
          open={this.state.dialogLoginOpen}
          onClose={() => this.setState({ dialogLoginOpen: false })}
          onSwitchToSignup={() => this.setState({ dialogSignupOpen: true })}
        />
        <SignupDialog
          open={this.state.dialogSignupOpen}
          onClose={() => this.setState({ dialogSignupOpen: false })}
          onSwitchToLogin={() => this.setState({ dialogLoginOpen: true })}
        />
      </div>
    );
  }
}

export default Navbar;