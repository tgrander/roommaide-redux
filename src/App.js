import React, { Component } from 'react';

import Header from './components/Header'
import RoommateApp from './containers/RoommateApp'
import Footer from './components/Footer'
import SidebarNav from './components/SidebarNav'

import './css/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SidebarNav/>
        <RoommateApp />
        <Footer/>
      </div>
    );
  }
}

export default App;
