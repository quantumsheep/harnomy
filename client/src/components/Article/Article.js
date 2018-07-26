import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Article.css';

class Article extends Component {
  render() {
    return (
      <Card className="card">
        <CardMedia
          className="cover"
          image="https://material-ui.com/static/images/cards/live-from-space.jpg"
          title="Live from space album cover"
        />
        <div className="details">
          <CardContent className="content">
            <Typography noWrap variant="headline">{this.props.title}</Typography>
            <Typography noWrap variant="subheading" color="textSecondary">
              {this.props.description}
            </Typography>
          </CardContent>
        </div>
      </Card>
    );
  }
}

export default Article;