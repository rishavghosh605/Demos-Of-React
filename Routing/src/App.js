import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Link,NavLink
} from "react-router-dom";
/*Link:Provides declarative, accessible navigation around your application.
NavLink:A special version of the <Link> that will add styling attributes
  to the rendered element when it matches the current URL.*/
function App() {
  return (
    <div className="App">
      <ul>
        <li><NavLink activeStyle={{color:'orange'}} to="/home">Home</NavLink></li>
        <li><NavLink activeStyle={{color:'red'}} to="/contact">Contact</NavLink></li>
        <li><NavLink activeStyle={{color:'blue'}} to="/about">About</NavLink></li>
        <li><NavLink activeStyle={{color:'green'}} to="/blog">Blog</NavLink></li>

      </ul>
    </div>
  );
}

export default App;
