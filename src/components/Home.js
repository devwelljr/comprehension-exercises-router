import React, { Component } from 'react';
import { Route } from 'react-router';
import About from './About.js';
import Users from './Users.js';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p> My awesome Home component </p>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/users" component={Users}/>
      </div>
    );
  }
}

export default Home;
