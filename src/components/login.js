import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import Navbar from './navbar';



class Login extends Component {
  constructor(props) {
    super(props)
    let loggedIn = false
    this.state = {
      username: "",
      password: "",
      loggedIn:false
    }
  }


  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault()
    const { username, password } = this.state;
    if (username && password) {
      localStorage.setItem("token", "89ihjbuigyuftyfuhbjh")
      this.setState({
        loggedIn: true
      })
    }
    console.log(this.state.loggedIn)
  }


  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <Navbar />
        <h1 style={{ textAlign: "center" }}>Login </h1>
        <form onSubmit = {this.submitForm}  style={{ marginLeft: '40%', width: '20%' }}>
          <div className="form-group" onSubmit={this.submitForm}>
            <label for="exampleInputEmail1"> Username</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
          </div>

          <button type="submit" style = {{backgroundColor:"#ee6e73"}} className="btn btn-danger">Submit</button>
        </form>
      </div>
    )
  }
}
export default Login;
