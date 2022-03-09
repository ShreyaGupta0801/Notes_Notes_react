import React, { Component } from "react";
 import "../Styles/home.css";
import Bg from "../Resources/images/unsplash2.jpg";
import {Link} from "react-router-dom";
import { Button } from "react-bootstrap";
class Home extends Component {
  render() {
    return (
      <div className="homeWrapper">
        <h1 className="heroText" style={headerstyle.top} >HandBook</h1>
        <h2 className="heroText">Let's create something</h2>
        <div className="heroWrapper">
          <div className="left">
            
          </div>
          <div style={headerstyle.head} className="right">
            <Link style={headerstyle.link} to="/login">
              <Button>
                 Login
              </Button>
            </Link>
            <Link style={headerstyle.link} to="/signup">
              <Button>
                 SignUp
              </Button>
            </Link>
            
          </div>
        </div>
      </div>
    );
  }
}
var headerstyle={
  top:{
    display:"flex",
    color:"pink",
  },
  head: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:"20%",
    marginRight:"5%",
    
  },
  link:{
    marginRight:"1rem"
  }
  
}

export default Home;