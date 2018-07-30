import React, { Component } from 'react';
import Navigation from './Navigation';
import NavigationItem from './NavigationItem';

class App extends Component {
  render() {
    return (
      <div className="">
        <Navigation>
          <NavigationItem text="Home" />
        </Navigation>
      </div>
    );
  }
}

export default App;
