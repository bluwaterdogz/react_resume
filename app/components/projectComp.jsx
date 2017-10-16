import React from 'react'
import ReactDOM from 'react-dom'

class ProjectList extends React.Component {
  constructor(props){super(props);}
  render() {
    if(this.props.loading){
      return (
        <div>
          {
            this.props.data.map(function(item, ind){
              return(
                <div key = {ind}>
                  <Project proj = {item} ind ={ind} />
                </div>
              )
            })
          }
        </div>
      )
    }else{
      return <p>"Tee Hee"</p>
    }
  }
}


 class Project extends React.Component {
   constructor(props){super(props);}
  render() {
    if(this.props.ind % 2 == 0){
      return (
        <div className="row is-flex rev">
          <ImageContainer {...this.props}/>
          <DescriptionContainer {...this.props}/>
        </div>
      )
    }else{
      return (
        <div className="row is-flex ">
          <ImageContainer {...this.props}/>
          <DescriptionContainer {...this.props}/>
        </div>
      )
    }
  }
}

class ImageContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    var imgStyle = {
      backgroundImage: "url(" + this.props.proj.img + ")"
    }
    return (
      <div className="col-xs-12 col-sm-6 image-container">
         <div className="project-pic-cont" style={imgStyle} >
          {/* <img src={this.props.proj.img} alt=""/> */}
          <div className="overlay">
            <div className="title-cont">
               <h3 >
                <a className="project-title" href="{this.props.proj.url}" target="_blank">{this.props.proj.title}</a>
                <a  href="{this.props.proj.projectUrl}" target="_blank">
                  &nbsp;<i className="fa fa-github"></i>
                </a>
              </h3>
              <hr/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class DescriptionContainer extends React.Component {
  constructor(props){super(props);}
  render() {
    return (
      <div className="col-xs-12 col-sm-6 description-container">
        <div className="row ">
          <div className="col-xs-12 col-sm-6 desc">
            <p className="desc-text">{this.props.proj.description}</p>
          </div>
          <div className="col-xs-12 col-sm-6 skills-list" >
            <ul>
               {this.props.proj.technologies.map(function(skill, ind){
                return <li key = {ind+skill}>{skill}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

class Projects extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      data:[]
    }
  }

  componentDidMount(){
    return fetch('json/projects.json')
      .then((res)=> res.json())
      .then((JSONRes)=>{
        this.setState({
          data: JSONRes
        });
      })
  }

  render() {
    return(
    <section id="projects" className="content">
      <div className="intro">
        <div className="overlay">
            <h2>Projects</h2>
            <hr width="80%"/>
            <p className="topic-text">I've participated in the development and launch of a number of applications and websites both as the sole developer and within a team. Some of these projects are listed below:</p>
        </div>
      </div>
      <div className='container'>
        <div  className = "project-desc">
          <ProjectList data = {this.state.data} loading = {this.state.loading}/>
        </div>
      </div>
    </section>
  )}
}

export default Projects;