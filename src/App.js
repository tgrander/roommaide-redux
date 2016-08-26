import React, { Component } from 'react';

import Header from './components/Header'
import RoommateApp from './containers/RoommateApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RoommateApp />
      </div>
    );
  }
}

export default App;
