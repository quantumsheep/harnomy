import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import config from '../../config';
import Articles from '../Articles/Articles';
import LoginDialog from '../LoginDialog/LoginDialog';
import SignupDialog from '../SignupDialog/SignupDialog';
import './App.css';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    dialogLoginOpen: false,
    dialogLoginType: "",
    dialogSignupOpen: false,
    dialogSignupType: "",
  }

  render() {
    return (
      <BrowserRouter>
        <Grid container className="App" justify="center">
          <Grid item xs={12} sm={10} md={7}>
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
            <div className="SubNavbar">
              <Button color="inherit">Category 1</Button>
              <Button color="inherit">Category 2</Button>
              <Button color="inherit">Category 3</Button>
              <Button color="inherit">Category 4</Button>
              <Button color="inherit">Category 5</Button>
            </div>

            <br />

            <LoginDialog
              open={this.state.dialogLoginOpen}
              type={this.state.dialogLoginType}
              onClose={() => this.setState({ dialogLoginOpen: false })}
              onSwitchToSignup={(type) => this.setState({ dialogSignupOpen: true, dialogSignupType: type })}
            />
            <SignupDialog
              open={this.state.dialogSignupOpen}
              type={this.state.dialogSignupType}
              onClose={() => this.setState({ dialogSignupOpen: false })}
              onSwitchToLogin={(type) => this.setState({ dialogLoginOpen: true, dialogLoginType: type })}
            />

            <Route exact path="/" component={Articles} />
            <Route path="/articles" component={Articles} />
          </Grid>
        </Grid>
      </BrowserRouter>
    );
  }
}

export default App;