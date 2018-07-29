import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import './LoginDialog.css';

class LoginDialogMail extends Component {
  state = {
    email: '',
    password: '',
    showPassword: false
  }

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  }

  switchToSignUp = (e) => {
    this.handleClose();
    this.props.switchToSignUp();

    e.preventDefault();
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  }

  login = e => {

  }

  render() {
    const { classes, onClose, selectedValue, switchToSignUp, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other} className="LoginDialog">
        <DialogTitle id="simple-dialog-title">Sign in with your mail!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Enter your account's mail and password.
          </DialogContentText>
          <br />
          <Divider />
          <form noValidate onSubmit={this.login}>
            <TextField
              required
              id="email"
              label="Email"
              value={this.state.email}
              onChange={this.handleChange('email')}
              fullWidth
              margin="normal"
              style={{ marginTop: 0 }}
            />
            <FormControl fullWidth required>
              <InputLabel htmlFor="adornment-password">Password</InputLabel>
              <Input
                id="adornment-password"
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.state.password}
                onChange={this.handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={() => this.setState(state => ({ showPassword: !state.showPassword }))}
                      onMouseDown={e => e.preventDefault()}
                    >
                      {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <br />
            <br />
            <br />
            <div className="dialog-actions">
              <Button type="button" onClick={this.handleClose} color="default">Back</Button>
              <Button type="submit" color="primary">Login</Button>
            </div>
          </form>
          <br />
          <Divider />
          <DialogContentText variant="caption">
            If you don't already have an account, you can <a href="" onClick={this.switchToSignUp}>Create One</a>.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  }
}

export default LoginDialogMail;