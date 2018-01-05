import React from "react"
import { Link } from 'react-router-dom'
class Header extends React.Component{
  render(){
    return (
        <div id = "divider1" className=" divider">
          <video src={require("../../video/forest-trim.mp4")} autoPlay loop muted poster={require("../../imgs/videobg.jpg")}/>
          <div className="overlay flexbox-container">
            <div id="title-cont" >
              <div id="title-box" >
                <h1 id="my_name" className=" ">Brian Velasquez</h1>
                <h3 className="titleheadline ">Front End Web Developer</h3>
                <hr/>
                <Link to="/skills" className="btn-white">Education</Link>
                <Link to="/projects" className="btn-white">Professional</Link>
                <Link to="/" className="btn-white">About me</Link>
                <a href="https://github.com/bluwaterdogz/react_resume" className="btn-white">Github</a>
                <a href="http://bluwaterdogz.github.io/web_des_resume/" className="btn-white">Angular Version</a>
              </div>
            </div>
          </div>
        </div>
    )}
}

export default Header;
