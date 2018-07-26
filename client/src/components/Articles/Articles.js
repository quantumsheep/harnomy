import React, { Component } from 'react';
import socket from '../../socket';
import './Articles.css';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import Article from '../Article/Article';
import Grid from '@material-ui/core/Grid';

class Articles extends Component {
  static propTypes = {
    width: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      articles: []
    }

    socket.on('new article', article => {
      this.state.articles.push(article);

      this.setState({ articles: this.state.articles });
    });
  }

  render() {
    return (
      <Grid container justify="center">
        {
          this.state.articles.map((article, index) => {
            if (index < 6) {
              const padding = this.props.width !== 'xs' ? (index % 2 ? { paddingLeft: 7.5 } : { paddingRight: 7.5 }) : {};
              
              return (
                <Grid item xs={12} sm={6} key={article.id} style={padding}>
                  <Article id={article.id} title={article.title} description={article.description} />
                </Grid>
              );
            } else {
              return (
                <Grid item xs={12} key={article.id}>
                  <Article id={article.id} title={article.title} description={article.description} />
                </Grid>
              );
            }
          })
        }
      </Grid>
    );
  }
}

export default withWidth()(Articles);