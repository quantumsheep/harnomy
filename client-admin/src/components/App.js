import React, { Component } from 'react';
import Navigation from './Navigation';
import NavigationItem from './NavigationItem';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import NotFound from './NotFound.js';
import Articles from './Articles.js';
import NewArticle from './NewArticle.js';

import logo from '../logo-white.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="SubRouter">
          <Navigation>
            <li>
              <img className="logo" src={logo} alt="Logo"></img>
            </li>
            <NavigationItem to="/" text="Home" />
            <NavigationItem to="/articles" text="Articles" />
          </Navigation>

          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/articles" exact component={Articles} />
              <Route path="/articles/new" exact component={NewArticle} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
