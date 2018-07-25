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

class LoginDialog extends Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  }

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
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
            <ListItem button>
              <ListItemText primary="Mail" />
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
    );
  }
}

export default LoginDialog;