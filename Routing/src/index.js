import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Blog from './Blog';
import BlogSingle from './BlogSingle';
import NotFound from './NotFound';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
//import { createBrowserHistory } from 'history'
ReactDOM.render(
<Router>
  <div>
    <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route exact path="/blog" component={Blog}/>
        <Route path="/blog/:postId" component={BlogSingle}/>
        <Route path="*" component={NotFound}/>
        {/* a final Route in routes.js, with no path attribute:*/}
    </Switch>
</div>
</Router>
     , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
