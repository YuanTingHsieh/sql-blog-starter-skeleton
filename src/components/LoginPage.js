import 'isomorphic-fetch';
import React, { Component } from 'react';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      userName: ''
    };
  }
//  login() {
//  }

  handleLogin(e) {
    e.preventDefault();
  }

  handleSignUp(e) {
    e.preventDefault();
    const body = this.state;
    fetch('/api/auth/signup', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(body),
      credentials: 'same-origin'
    }).then(result => {
      this.setState({
        email: '',
        password: '',
        userName: ''
      });
      console.log(result);
      const { createdId } = result;
      this.props.setUserID(createdId);
    }).catch(function(err) {
        console.log("Error logging in", err);
    });
  }

  handleUserNameChange = e => {
    this.setState({
      userName: e.target.value
    });
  }

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  }

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  }
  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="col-md-12">
      <div className="jumbotron">
        <h1>Login</h1>
        <form role="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" value={this.state.userName} className="form-control" id="username" placeholder="Username" onChange={this.handleUserNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" value={this.state.email} className="form-control" id="email" placeholder="example@org" onChange={this.handleEmailChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" value={this.state.password} className="form-control" id="password" ref="password" placeholder="Password" onChange={this.handlePasswordChange} />
        </div>
        <div className="row">
        <div className="col-md-2 btn-group">
          <button type="submit" className="btn btn-primary" onClick={this.handleSignUp.bind(this)}>Sign up</button>
        </div>
        <div className="col-md-2 btn-group">
          <button type="submit" className="btn btn-success" onClick={this.handleLogin.bind(this)}>Login</button>
        </div>
        </div>
        </form>
    </div>
    </div>
    </div>
    </div>
    );
  }
}

export default LoginPage;
