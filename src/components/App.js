import React, { Component } from 'react';
import { Link } from 'react-router';
import Breadcrumbs from 'react-breadcrumbs';
import auth from '../utils/auth';

class App extends Component {

  getInitialState() {
    return {
      loggedIn: auth.loggedIn()
    }
  },

  updateAuth(loggedIn) {
    this.setState({
      loggedIn
    })
  },

  componentWillMount() {
    auth.onChange = this.updateAuth
    auth.login()
  },



  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">Web Seminar - Blog</Link>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/about">About</Link></li>
              <li>
                <Link to="/" onlyActiveOnIndex>Home</Link>
              </li>
              <li>
                <Link to="/articles">Articles</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Breadcrumbs wrapperClass="breadcrumb" routes={this.props.routes} params={this.props.params} setDocumentTitle={true}/>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}


export default App;
