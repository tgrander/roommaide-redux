import React, { Component } from 'react'

import { styleLogo } from '../utilities/styleFunctions'

import '../css/Header.css'

class Header extends Component {

  componentDidMount(){
    styleLogo("white")
  }

  render(){
    return (
      <div className='header' >
        <h1 className='logo' id='title'>ROOMMAIDE</h1>
      </div>
    )
  }
}

export default Header
