import React, { Component } from 'react';
import { Link } from 'react-router';
import Breadcrumbs from 'react-breadcrumbs';

class App extends Component {
  state = {
    route: window.location.hash.substr(1),
    userId: null,
  };

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1),
      });
    });
  }

  setUserID(id) {
    this.setState({ userId: id });
  }



  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">Web Seminar - Blog</Link>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/" onlyActiveOnIndex>Home</Link>
              </li>
              <li>
                <Link to="/articles">Articles</Link>
              </li>
              <li>
                <Link to="/auth">Login</Link>
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
