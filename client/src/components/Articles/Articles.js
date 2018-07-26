import React, { Component } from 'react';
import socket from '../../socket';
import './Articles.css';
import Article from '../Article/Article';
import Grid from '@material-ui/core/Grid';

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    }

    socket.on('new article', article => {
      console.log(article);

      this.state.articles.push(article);

      this.setState(this.state);
    });
  }

  render() {
    return (
      <Grid container justify="center">
        {
          this.state.articles.map(article => (
            <Grid item xs={12} key={article.id}>
              <Article id={article.id} title={article.title} description={article.description} />
            </Grid>
          ))
        }
      </Grid>
    );
  }
}

export default Articles;