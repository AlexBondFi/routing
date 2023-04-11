import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>This is the Home component</h1>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <h1>This is the About component</h1>
    </div>
  );
};
const Contacts = () => {
  return (
    <div>
      <h1>This is the Contact component</h1>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink to='/contacts'>Contacts</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;