import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import Textarea from './Textarea';

class Articles extends Component {
  state = {
    articles: [],
    title: "",
    content: ""
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  }

  goBackToArticleList = () => {
      if (this.state.title && this.state.content) {
          
      }
  }

  save = e => {
      e.preventDefault();
  }

  render() {
    return (
      <div class="admin-form">
        <div>
          <h1 className="d-inline-block">New article</h1>
          <Link to="/articles" className="btn float-right">Back to articles list</Link>
        </div>
        <form method="POST" onSubmit={this.save} >
            <Input type="text" label="Title" name="title" id="title" value={this.state.title} onChange={this.handleChange('title')} />
            <Textarea label="Content" name="content" id="content" value={this.state.content} onChange={this.handleChange('content')} placeholder="Have a happy writing ( ͡° ͜ʖ ͡°)" className="h-100" formGroupClass="h-100" />
            <div className="text-right">
              <button type="submit" className="btn">Validate</button>
            </div>
        </form>
      </div >
    );
  }
}

export default Articles;
