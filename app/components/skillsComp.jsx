import React from 'react'
import ReactDOM from 'react-dom'

class TypesList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section id="skills" className="content">
        <h2>Skills</h2>
        <hr width="80%"/>
        <div className="row">
          {
            this.props.skillsData.map((type,i) => {
              return (
                <div
                  className="skills-cont col-sm-6 "
                  key = {type.name+i}
                  >
                  <div className={type.name+'-sec'}>
                    <div className="overlay">
                      <span className="skills-icon"><i className={'fa '+type.icon}></i></span>
                      <SkillsList skills ={type.skills} />
                    </div>
                  </div>
                </div>
              )
            })
          }
          <hr width="80%"/>
          <p>
            Other Languages & Frameworks: JSON, SCSS, Meteor.js, AngularJS<br/> IDE experience: Sublime Text, EMACs, Android Studio, XCode, PyCharm, MAMP
          </p>
        </div>
      </section>
    )
  }
}

class SkillsList extends React.Component{
  constructor(props){super(props);}
  render(){
    return (
    <ul>
      {
        this.props.skills.map((skill,i)=>{
          return (
            <li
              className="skills-list-item"
              key = {skill.skill+i}>
              {skill.skill}
            </li>
            )
        })
      }
    </ul>
  )
  }
}

class EducationList extends React.Component{
  render(){
    var EduCols = [];
    for(var i = 0;i<3;i++){
        EduCols.push(<EduListCol {...this.props} filterIndex ={i} key = {i} />);
    }
    return(
      <section id="education" className="content fluid-container">
    		<h2>On Campus Classes</h2>
    		<h3>Click for more info</h3>
    		<hr width="80%"/>
          {EduCols}
    		<div className="col-md-12 clear disclaimer">
    			<p>Other relevant classes include: Introduction to C++ programming & Introduction to Java Programming using games and simulations</p>
    		</div>
    	</section>
    )
  }
}

class EduListCol extends React.Component{
  render(){
    return (
      <div className="col-sm-4 educationcontainer">
        {
          this.props.eduData
            .filter((_,itemIndex) => itemIndex % 3 === this.props.filterIndex)
            .map((edu,itemIndex) => {
              return(  <EduInfo info={edu} key={"class"+itemIndex} ></EduInfo>)
            })
        }
      </div>
    )
  }
}

class EduInfo extends React.Component{
  render(){
    return(
    <div className={"expBox wow flipInX"+this.props.info.icon+"exp "+this.props.info.type+"-sec"}>
    	<div className="overlay">
      		<p className="icon-container">
      			<i className={"fa fa-"+this.props.info.icon}></i>
      		</p>
      		<h3 className="class-title">
      			<a
              // ng-click="anim(); showDeets=!showDeets;"
              >{this.props.info.title}</a>
      		</h3>
      		<hr/>
      		<p>
      			{this.props.info.date}
      		</p>
      		<p
            className="desc"
            // ng-show="showDeets"
            >
      			{this.props.info.description}
      		</p>
      </div>
    </div>
    )
  }
}

class JobList extends React.Component{
  render(){
    return (
      <section id="experience" className="content">
          <div className="overlay">
              <div id="work-cont">
            <h2>Professional Experience</h2>
            <hr width="80%"/>
              {
                this.props.jobsData.map(function(job,i){
                  return (
                    <div className="workexperience sway col-sm-4" key = {job.companyName+i}>
                      <img src={job.logoImg} alt="logo for {job.companyName}"/>
                      <a className="company-name" href="{job.companyUrl}">
                          {job.companyName}
                        </a>
                      <br/>
                      <a className="professional-title" href="{job.companyUrl}">
                        {job.professionalTitle}
                      </a>
                    </div>
                  );
                })
              }
            <div className="clear">
              <p>Previous unlisted work experience in Molecular Biology, refrences availiable upon request.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

class Skills extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading : true,
      skillsData : [],
      eduData : [],
      jobsData : []
    }
  }

  componentDidMount(){
    fetch('build/assets/json/skills.json')
    .then((res) => res.json())
    .then((JSONRes) => {
      this.setState({
        skillsData : JSONRes
      });
    });
    fetch('build/assets/json/classes.json')
    .then((res) => res.json())
    .then((JSONRes) => {
      this.setState({
        eduData : JSONRes
      });
    });
    fetch('build/assets/json/jobs.json')
    .then((res) => res.json())
    .then((JSONRes) => {
      this.setState({
        jobsData : JSONRes
      });
    })
  }

  render(){
    return (
      <div>
        <TypesList skillsData = {this.state.skillsData}/>
        <div className="divider divider4">
          <div className="overlay"></div>
        </div>
        <EducationList eduData = {this.state.eduData}/>
        <div className="divider divider5">
          <div className="overlay"></div>
        </div>
        <JobList jobsData = {this.state.jobsData}/>
      </div>
    )
  }
}

export default Skills
