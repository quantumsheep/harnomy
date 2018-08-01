import React, { Component } from 'react';
import Navigation from './Navigation';
import NavigationItem from './NavigationItem';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import NotFound from './NotFound.js';
import Articles from './Articles.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="SubRouter">
          <Navigation>
            <NavigationItem to="/" text="Home" />
            <NavigationItem to="/articles" text="Articles" />
          </Navigation>

          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/articles" exact component={Articles} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
