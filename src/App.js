import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Topics from './components/TopicList';
// import asyncComponent from "./components/AsyncComponent";
// const AsyncTopics = asyncComponent(() => import('./components/TopicList'));
// const AsyncHome = asyncComponent(() => import("./components/Home"));
// const AsyncAbout = asyncComponent(() => import("./components/About"));

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/topics">Topics List</Link></li>
      </ul>

      <hr/>

      {/* <Route exact path="/" component={AsyncHome}/>
      <Route path="/about" component={AsyncAbout}/>
      <Route path="/topics" component={AsyncTopics}/> */}

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>

    </div>
  </Router>
)

export default BasicExample
