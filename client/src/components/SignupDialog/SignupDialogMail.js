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
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import './SignupDialog.css';
import Button from '@material-ui/core/Button';

class SignupDialogMail extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    showPassword: false
  }

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  }

  switchToLogin = (e) => {
    this.handleClose();
    this.props.switchToLogin();

    e.preventDefault();
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  }

  register = e => {

  }

  render() {
    const { classes, onClose, selectedValue, switchToLogin, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other} className="LoginDialog">
        <DialogTitle id="simple-dialog-title">Sign in with your mail!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Enter your account's mail and password.
          </DialogContentText>
          <br />
          <Divider />
          <form noValidate autoComplete="off">
            <TextField
              required
              id="username"
              label="Username"
              value={this.state.username}
              onChange={this.handleChange('username')}
              fullWidth
              margin="normal"
              style={{ marginTop: 0 }}
            />
            <TextField
              required
              id="email"
              type="email"
              label="Email"
              value={this.state.email}
              onChange={this.handleChange('email')}
              fullWidth
              margin="normal"
              style={{ marginTop: 0 }}
            />
            <FormControl fullWidth required>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
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
            <div className="text-right">
              <Button type="button" onClick={this.register} color="primary">Create the account</Button>
            </div>
          </form>
          <br />
          <Divider />
          <DialogContentText variant="caption">
            If you already have an account, you can <a href="" onClick={this.switchToLogin}>Sign in</a>.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  }
}

export default SignupDialogMail;