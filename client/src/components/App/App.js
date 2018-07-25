import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Navbar from '../Navbar/Navbar';
import Articles from '../Articles/Articles';
import socket from '../../socket';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    socket.on('title', title => console.log('title'));
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <br />
        <Articles />
      </div>
    );
  }
}

export default App;