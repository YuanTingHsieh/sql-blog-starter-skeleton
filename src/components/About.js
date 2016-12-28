import React from 'react';

const About = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
            <h1>Hi, Welcome to Blog!</h1>
            <h2>This is a web blog system developed by <a href="https://github.com/YuanTingHsieh/">YuanTingHsieh</a></h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = About
