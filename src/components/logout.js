import React, { Component } from 'react'
import {Link, Redirect } from 'react-router-dom';
import Home from './Home.js'


class Logout extends Component {
  constructor(props){
    super(props)
      localStorage.removeItem("token")
    
  }
  render() {
    return (
      <div>
      <Home/>
      </div>
    )
  }
}

export default Logout
