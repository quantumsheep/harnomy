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

  switchToLogin = (e) => {
    this.handleClose();
    this.props.onSwitchToLogin("Mail");

    if (e) {
      e.preventDefault();
    }
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
              If you already have an account, you can <a href="" onClick={this.switchToLogin}>Sign in</a>.
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <SignupDialogMail
          open={this.state.dialogMailOpen}
          onClose={() => this.setState({ dialogMailOpen: false })}
          switchToLogin={this.switchToLogin}
        />
      </div>

    );
  }
}

export default SignupDialog;