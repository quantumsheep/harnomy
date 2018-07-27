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
import config from '../../config';

class SignupDialogMail extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    showPassword: false,
    isUsernameError: false,
    isEmailError: false,
    isPasswordError: false,
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
    e.preventDefault();

    this.setState({
      isUsernameError: !(this.state.username && this.state.username.length >= 3),
      // eslint-disable-next-line
      isEmailError: !(this.state.email && this.state.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)),
      isPasswordError: !(this.state.password && this.state.password.length >= 8),
    });

    if (!this.state.isUsernameError && !this.state.isEmailError && !this.state.isPasswordError) {
      const init = {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json; charset=utf-8',
        },
        mode: 'cors',
        cache: "no-cache",
        credentials: "same-origin",
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify({
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        })
      };

      fetch(`${config.httpurl}/action/signup`, init)
        .then(res => res.text())
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
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
          <form noValidate onSubmit={this.register}>
            <TextField
              required
              id="username"
              label="Username"
              error={this.state.isUsernameError}
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
              error={this.state.isEmailError}
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
                error={this.state.isPasswordError}
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
              <Button type="submit" color="primary">Create the account</Button>
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