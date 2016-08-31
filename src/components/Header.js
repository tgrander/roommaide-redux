import React, { Component } from 'react'

import { styleLogo } from '../utilities/styleFunctions'

import '../css/Header.css'

// const Header = () => (
//
// )

class Header extends Component {

  componentDidMount(){
    styleLogo("white")
  }

  render(){
    console.log('STYLE LOGO FUNCTION: ', styleLogo);
    return (
      <div className='header'>
        <h1 className='logo' id='title'>ROOMMAIDE</h1>
      </div>
    )
  }
}

export default Header
