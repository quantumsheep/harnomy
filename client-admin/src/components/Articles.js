import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Articles extends Component {
  state = {
    articles: []
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="d-inline-block">Articles</h1>
          <Link to="/articles/new" className="btn float-right">New article</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <td>ID</td>
              <td>Title</td>
              <td>Views</td>
              <td>Likes</td>
              <td>Author</td>
              <td>Created date</td>
              <td>Last modified</td>
            </tr>
          </thead>
          {
            this.state.articles.map(article => (
              <thead>
                <tr>
                  <td>{article.id}</td>
                  <td>{article.title}</td>
                  <td>{article.views}</td>
                  <td>{article.likes}</td>
                  <td>{article.author}</td>
                  <td>{article.created}</td>
                  <td>{article.modified}</td>
                </tr>
              </thead>
            ))
          }
        </table>
      </div >
    );
  }
}

export default Articles;
