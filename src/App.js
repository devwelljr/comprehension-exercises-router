import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './StrictAccess';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    const greetingsMessage = 'Good Morning';
    const user = { username: "joao", password: "1234" }
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
          <li>
            <Link to='/StrictAccess'>Strict Access</Link>
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
          <Route path='/StrictAccess' render={(props) => <StrictAccess {...props} user={user} />}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
