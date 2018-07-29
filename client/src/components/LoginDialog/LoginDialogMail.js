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
import Infobar from '../Infobar/Infobar';
import config from '../../config';
import './LoginDialog.css';

class LoginDialogMail extends Component {
  state = {
    email: '',
    password: '',
    showPassword: false,
    isEmailError: false,
    isPasswordError: false,
    signupErrors: []
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
    e.preventDefault();

    const actual = {
      // eslint-disable-next-line
      isEmailError: !(this.state.email && this.state.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)),
      isPasswordError: !(this.state.password && this.state.password.length >= 8),
    };

    this.setState(actual);

    if (!actual.isEmailError && !actual.isPasswordError) {
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

      fetch(`${config.httpurl}/action/login`, init)
        .then(res => res.json())
        .then(res => {
          if (res.success) {

          } else {
            this.setState({
              signupErrors: res.errors
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else if (this.state.signupErrors) {
      this.setState({
        signupErrors: []
      });
    }
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
          {
            this.state.signupErrors.map((error, index) => (
              <Infobar key={index} message={error} type="error" onClose={() => {
                this.state.signupErrors.splice(index, 1);
                this.setState({ signupErrors: this.state.signupErrors });
              }} />
            ))
          }
          <br />
          <form noValidate onSubmit={this.login}>
            <TextField
              required
              id="email"
              label="Email"
              error={this.state.isEmailError}
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