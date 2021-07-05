import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    const greetingsMessage = 'Good Morning';
    return (
      <BrowserRouter>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route
            path='/users/:id'
            render={(props) => (
              <Users { ...props } greetingsMessage={ greetingsMessage } />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
