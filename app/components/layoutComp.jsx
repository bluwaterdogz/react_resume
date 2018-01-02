import React from "react"
import Head from "./headComp.jsx"
import Footer from "./footerComp.jsx"

class Layout extends React.Component{
  render(){
    return (
      <div>
        <Head></Head>
          {this.props.children}
        <Footer></Footer>
      </div>
    )
  }
}
export default Layout;
