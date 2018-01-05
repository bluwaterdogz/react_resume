import React from "react"

class Footer extends React.Component{
  render(){
    var profPic = require('../../imgs/me.jpg');
    return (
      <footer className="content">
         <div className="divider divider6">
          <div className="overlay">
              <div className="profcont bounceIn animated ">
                <img src={`./${profPic}`} alt="Hey this is a picture of me!" id="profPic"/>
              </div>
          </div>
        </div>
        <div className="footercontainer">
          <div className="btn-group">
            <a className="writtenbtn btn btn-primary"
              href={'m'+'a'+'&'+'#'+'1'+'0'
              +'5'+';'+'l'+'t'+'&'+'#'+'1'+'1'+'1'+';'+'&'+'#'+'5'+'8'+';'+'%'+'6'+'2'+'v'+'e'+'&'+'#'+'1'
              +'0'+'1'+';'+'d'+'y'+'&'+'#'+'6'+'4'+';'+'&'+'#'+'3'+'7'+';'+'&'+'#'+'5'+'4'+';'+'&'+'#'+'5'
              +'5'+';'+'m'+'a'+'i'+'&'+'#'+'3'+'7'+';'+'6'+'C'+'&'+'#'+'4'+'6'+';'+'c'+'&'+'#'+'3'+'7'+';'
              +'6'+'F'+'m' }>
              Contact Me</a>
            <a href="" className="backToTop btn btn-primary">Back to Top</a>
          </div>
          <noscript>Turn on JavaScript to see my email address ;P</noscript>
          <p >Site made using Reactjs, using fetch calls to local json files to simulate API calls. Hosted using Github pages.</p>
        </div>
      </footer>
    )
  }
}
export default Footer;
