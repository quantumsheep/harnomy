import React, { Component } from 'react';
import socket from '../../socket';
import './Articles.css';
import Article from '../Article/Article';
import Grid from '@material-ui/core/Grid';

class Articles extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={12} sm={8}>
          <Article />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Article />
        </Grid>
      </Grid>
    );
  }
}

export default Articles;