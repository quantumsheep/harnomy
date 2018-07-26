import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import SubNavbar from '../SubNavbar/SubNavbar';
import Articles from '../Articles/Articles';
import './App.css';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <Grid container className="App" justify="center">
        <Grid item  xs={12} sm={10} md={7}>
          <Navbar />
          <SubNavbar />
          <br />
          <Articles />
        </Grid>
      </Grid>
    );
  }
}

export default App;