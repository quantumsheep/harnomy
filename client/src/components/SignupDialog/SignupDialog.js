import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './SignupDialog.css';
import SignupDialogMail from './SignupDialogMail';

class SignupDialog extends Component {
  state = {
    dialogMailOpen: false
  }

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  }

  switchToLoginEv = (e) => {
    this.switchToLogin();

    if (e) {
      e.preventDefault();
    }
  }

  switchToLogin = (type = "") => {
    this.handleClose();
    this.props.onSwitchToLogin(type);
  }

  render() {
    const { classes, onClose, selectedValue, onSwitchToLogin, ...other } = this.props;

    return (
      <div>
        <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other} className="LoginDialog">
          <DialogTitle id="simple-dialog-title">Welcome to SyncBlog!</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Please select your favorite authentification method in order to create a new account.
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
              <ListItem button onClick={() => this.setState({ dialogMailOpen: true })}>
                <ListItemText primary="Mail" />
              </ListItem>
            </List>
            <DialogContentText variant="caption">
              If you already have an account, you can <a href="" onClick={this.switchToLoginEv}>Sign in</a>.
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <SignupDialogMail
          open={this.state.dialogMailOpen}
          onClose={() => this.setState({ dialogMailOpen: false })}
          switchToLogin={type => this.switchToLogin(type)}
        />
      </div>

    );
  }
}

export default SignupDialog;