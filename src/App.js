import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/users'>About</Link>
        </div>
        <Home />
      </BrowserRouter>
    );
  }
}

export default App;
