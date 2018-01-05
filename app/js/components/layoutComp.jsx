import React from "react"
import Head from "./headComp.jsx"
import Footer from "./footerComp.jsx"
import about from "./aboutComp.jsx"
import skills from "./skillsComp.jsx"
import projects from "./projectComp.jsx"
import {HashRouter, Route, Switch} from 'react-router-dom'
import lostComp from './404Comp.jsx'
export default () => (
    <HashRouter >
      <div>
        <Head></Head>
        <Switch>
          <Route exact path= "/" component = {about}/>
          <Route path = "/projects" component = {projects}/>
          <Route path = "/skills" component = {skills}/>
          <Route component = {lostComp}/>
        </Switch>
        <Footer></Footer>
      </div>
    </HashRouter>
)
