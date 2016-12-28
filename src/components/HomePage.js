import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
              <h1>Hi, Welcome Blog!</h1>
              <p><Link className="btn btn-success btn-lg" to="/articles" role="button">文章列表</Link></p>
              <p><Link className="btn btn-success btn-lg" to="/articles/new" role="button">發表新文章</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
