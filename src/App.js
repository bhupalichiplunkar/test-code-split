import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import asyncComponent from "./components/AsyncComponent";
const AsyncTopics = asyncComponent(() => import('./components/TopicList'));
const AsyncHome = asyncComponent(() => import("./components/Home"));
const AsyncAbout = asyncComponent(() => import("./components/About"));

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={AsyncHome}/>
      <Route path="/about" component={AsyncAbout}/>
      <Route path="/topics" component={AsyncTopics}/>
    </div>
  </Router>
)

export default BasicExample
