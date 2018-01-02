import React from "react"

class About extends React.Component{
  render(){
    var mobileImg = require("../../build/assets/imgsopt/mob-trans-res.png");
    return (
      <section id="statement" className="content">
        <div className="sec-container  statement-cont">
          <h2>My Web Design Experience</h2>
          <hr width="80%"/>
          <p className="firstInfo">A junior front end developer dedicated to implementing stunning, engaging and user-friendly designs, he's experienced in Javascript, Python, HTML/CSS, PHP and Java. <br/>
          <br/> This portfolio which is hosted on Github pages demonstrates my abilities and was built using a git and Webpack backend dev environment and coded in Atom in a combination of React, Sass and Bootstrap.</p>
        </div>
        <div className="divider divider2">
          <div className="overlay"></div>
        </div>
        <div className="block first-block">
          <div className="container sec-container">
            <div className="img-cont col-sm-12 col-md-5">
              <img src={mobileImg} alt="mobile phone with lb site"/>
            </div>
            <div className="text-cont col-sm-12 col-md-7">
              <h3>
              Mobile Friendly, Cross Browser compatible
              </h3>
                <hr width="80%"/>
                <p>This year, online mobile traffic is expected to overtake desktop traffic. Is your website ready?<br/><br/>Responsive cross browser Web Design is my Jam. Flex-Box? Into it. Media Queries? In the Bag. Whether leveraging Bootstrap, Foundation, SASS or vanilla CSS, I'll make your site shine in a mobile friendly, multi-browser world.</p>
            </div>
          </div>
        </div>
        <div className="divider divider2">
          <div className="overlay"></div>
        </div>
        <div className="block second-block">
          <div className="overlay">
            <div className="sec-container container">
              <div className="row">
                <div className="img-cont col-md-6 col-md-push-6 "></div>
                <div className="text-cont  col-md-6 col-md-pull-6">
                  <h3>
                  API Savy
                  </h3>
                  <hr width="80%"/>
                  <p>I'm quickly adaptable to a variety of API's. Utilizing Javascript to asynchronously reach anything from Google maps to customized API endpoints, I'm excited to connect your clients to the data they seek.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About;
