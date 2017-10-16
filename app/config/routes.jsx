import React from "react"
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
// import { RouteTransition } from 'react-router-transition';
import Layout from "../components/layoutComp.jsx"
import about from "../components/aboutComp.jsx"
import skills from "../components/skillsComp.jsx"
import projects from "../components/projectComp.jsx"

class Routes extends React.Component{
  render(){
    return (
      <Router history={hashHistory}>
        <Route path = "/" component = {Layout} >
          <IndexRoute component = {about}/>
          <Route path = "/projects" component = {projects}/>
          <Route path = "/skills" component = {skills}/>
        </Route>
      </Router>
  )}
}

export default Routes;
