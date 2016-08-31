import React, { Component } from 'react'

import { styleLogo } from '../utilities/styleFunctions'

import '../css/Header.css'

class Header extends Component {

    componentDidMount(){
      styleLogo("white")
    }

    render(){
      return (
        <h1 className='title'>ROOMMAIDE</h1>
      )
    }

}

export default Header
