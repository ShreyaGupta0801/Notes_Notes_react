import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import UserService from "../Services/UserService";
export default class Login extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      username: "",
      password: "",
      isAlertShow: true,
      alertType: "danger",
    };
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeAlertDanger = this.changeAlertDanger.bind(this);
    this.changeAlertSuccess = this.changeAlertSuccess.bind(this);
  }
  changeUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  changeAlertDanger = (e) => {
    document.querySelector(".alertMessage").style.backgroundColor = "red";
  };
  changeAlertSuccess = (e) => {
    document.querySelector(".alertMessage").style.backgroundColor = "green";
  };

  
  loginUser = (e) => {
    e.preventDefault();
    let User = {
      username: this.state.username,
      password: this.state.password,
    };
    this.changeAlertSuccess();
    console.log("User => " + JSON.stringify(User));

    setTimeout(() => {
      UserService.loginUser(User).then((res) => {
        console.log(res.data);
        if (res.data.message.id === 0) {
          this.setState({ isAlertShow: true });
          this.setState({
            alertMessage: "Invalid credentials",
          });
        } else {
          this.setState({
            alertMessage: "Login Successful, redirecting to your notes",
          });
          this.setState({ isAlertShow: true });
          this.changeAlertSuccess();
          setTimeout(() => {
            this.props.history.push("/notes", res.data);
          }, 3000);
        }
      });
    }, 1);
  };
  render() {
    const { history } = this.props;
    return (
      <div className="container" style={containerStyle.div}>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Login your Account</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input type="username"placeholder="username"className="form-control"value={this.state.useranem}onChange={this.changeUsername}/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="text"placeholder="password"className="form-control"value={this.state.Password}onChange={this.changePassword}/>
                </div>
                <div className="form-group" style={loginButtonStyle.parent}>
                  <div
                    className="btn btn-success"
                    onClick={this.loginUser}
                    style={loginButtonStyle.button1}
                  >
                    Login
                  </div>
                  <div
                      className="btn btn-danger"
                      style={loginButtonStyle.button2}
                    >
                      Cancel
                    </div>
                  
                </div>
              </form>
              {this.state.isAlertShow && (
                  <div
                    className="alertMessage"
                    variant={this.state.alertType}
                    style={containerStyle.alertMessage}
                  >
                    <p>{this.state.alertMessage}</p>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
var containerStyle = {};
var loginButtonStyle = {
  parent: {
    display: "flex",
    justifyContent: "center",
  },
  button1: {
    width: "20%",
    marginTop: "15px",
  },
  button2: {
    width: "20%",
    marginTop: "15px",
  },
};