import React from "react"
import Head from "./headComp.jsx"
import Footer from "./footerComp.jsx"
import about from "./aboutComp.jsx"
import skills from "./skillsComp.jsx"
import projects from "./projectComp.jsx"
import {BrowserRouter, Route} from 'react-router-dom'
// import { RouteTransition } from 'react-router-transition';

export default () => (
    <BrowserRouter >
      <div>
        <Head></Head>
        <Route exact path= "/" component = {about}/>
        <Route path = "/projects" component = {projects}/>
        <Route path = "/skills" component = {skills}/>
        <Footer></Footer>
      </div>
    </BrowserRouter>
)
