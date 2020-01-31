import React, {Component} from 'react';
import {
    Link,NavLink
  } from "react-router-dom";
class Blog extends Component{
    render(){
        return(
            <div>
            <h2>Blog</h2>
            <ul>
                <li><NavLink activeStyle={{color:'orange'}} to="/blog/123">Blog 1</NavLink></li>
                <li><NavLink activeStyle={{color:'red'}} to="/blog/456">Blog 2</NavLink></li>

            </ul>
            </div >
        );
    };
}

export default Blog;