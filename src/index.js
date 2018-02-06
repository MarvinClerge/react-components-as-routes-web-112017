import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

const App = () => {
  return (
    <div>
    </div>
  );
};

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Signup = () => <h1>Signup</h1>
const Login = () => {
  return(
    <div>
      <form>
        <div>
          <input type='text' name='username' placeholder='Username' />
          <label htmlFor='username'>Username</label>
        </div>
        <div>
          <input type='password' name='password' placeholder='Password' />
          <label htmlFor='password'>Password</label>
        </div>
        <input type='submit' value='Login'/>
      </form>
    </div>
  )
}
const Navbar = () => {
  return(
    <div>
      <NavLink to="/" exact style={link} activeStyle={activeLink}>
        Home
      </NavLink>
      <NavLink to="/about" exact style={link} activeStyle={activeLink}>
        About
      </NavLink>
      <NavLink to="/login" exact style={link} activeStyle={activeLink}>
        Login
      </NavLink>
      <NavLink to="/signup" exact style={link} activeStyle={activeLink}>
        Signup
      </NavLink>
      <NavLink to='/messages' exact style={link} activeStyle={activeLink}>
        Messages
      </NavLink>
    </div>
  )
}
const link = {
  width: '100px',
  padding: '10px',
  textDecoration: 'none',
  color: 'black'
}
const activeLink = {
  border: '1px solid red',
  color: 'snow',
  background: 'darkgrey'
}



ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path='/messages' render={() => <li>Messages</li>}/>
    </div>
  </Router>,
  document.getElementById('root')
);
