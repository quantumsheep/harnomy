import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './LoginDialog.css';
import LoginDialogMail from './LoginDialogMail';

class LoginDialog extends Component {
  state = {
    dialogMailOpen: false
  }

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  }

  switchToSignup = (e) => {
    this.handleClose();
    this.props.onSwitchToSignup();

    if (e) {
      e.preventDefault();
    }
  }

  openMailLogin = () => {
    this.setState({ dialogMailOpen: true });
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.type === "Mail" && prevProps.type != "Mail") {
      this.openMailLogin();
    }
  }

  render() {
    const { classes, onClose, selectedValue, onSwitchToSignup, type, ...other } = this.props;

    return (
      <div>
        <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other} className="LoginDialog">
          <DialogTitle id="simple-dialog-title">Welcome back!</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Please select your favorite authentification method.
          </DialogContentText>
            <br />
            <Divider />
            <List component="nav">
              <ListItem button>
                <ListItemText primary="Facebook" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Google" />
              </ListItem>
              <ListItem button onClick={this.openMailLogin}>
                <ListItemText primary="Mail" />
              </ListItem>
            </List>
            <DialogContentText variant="caption">
              If you don't already have an account, you can <a href="" onClick={this.switchToSignup}>Create one</a>.
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <LoginDialogMail
          open={this.state.dialogMailOpen}
          onClose={() => this.setState({ dialogMailOpen: false })}
          switchToSignUp={this.switchToSignup}
        />
      </div>
    );
  }
}

export default LoginDialog;