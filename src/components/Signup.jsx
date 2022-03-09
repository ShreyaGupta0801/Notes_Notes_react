import React, { Component } from 'react';
import UserService from "../Services/UserService";
import Alert from "react-bootstrap/Alert";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          alertMessage: "",
          isAlertShow: true,
          alertType: "danger",
        };
        this.changeUsername = this.changeUsername.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeConfirmPassword =this.changeConfirmPassword.bind(this);
        
    }
    changeUsername= (event) => {
        this.setState({ username: event.target.value });
    }
    
    changeEmail = (event) => {
        this.setState({ email: event.target.value });
    };
    changePassword = (event) => {
        this.setState({ password: event.target.value });
    };
    changeConfirmPassword = (event) => {
        this.setState({ confirmPassword: event.target.value });
    };
    emailValidator(email) {
        const isValid = String(email).toLowerCase().match('[a-z0-9]+@gmail.com');
        if (isValid) {
          return true;
        }
        this.setState({ alertMessage: "Invalid Email" });
        this.setState({ isAlertShow: true });
        return false;
    }
    
    confirmPasswordValidator(confirmpassword) {
        if (this.state.password === confirmpassword) return true;
        this.setState({ alertMessage: "Password does not match" });
        this.setState({ isAlertShow: true });
        return false;
    }
    
    saveUser = (event) => {
        event.preventDefault();
        let User = {
          username: this.state.username,
          
          email: this.state.email,
          password: this.state.password,
          
        };
      
        var isEmailValid = this.emailValidator(this.state.email);
        if (!isEmailValid) {
          return;
        }
        // var isPasswordValid = this.passwordValidator(this.state.password);
        // if (!isPasswordValid) {
        //   return;
        // }
        var isConfirmPasswordValid = this.confirmPasswordValidator(
          this.state.confirmPassword
        );
        if (!isConfirmPasswordValid) {
          return;
        }
    
        console.log("User => " + JSON.stringify(User));
        this.setState({ alertMessage: "Account Created Successfully" });
        this.setState({ isAlertShow: true });
        this.setState({ alertType: "success" });
        setTimeout(() => {
          UserService.createUser(User).then((res) => {
            this.props.history.push("/login");
          });
        }, 3000);
    };
    

    render() {
        const { history } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className="text-center">Create your Account</h3>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text"placeholder="Name"className="form-control"value={this.state.username}onChange={this.changeUsername}/>
                                    </div>
                                    

                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email"placeholder="Email"className="form-control"value={this.state.email}onChange={this.changeEmail}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="text"placeholder="Password"className="form-control"value={this.state.password}onChange={this.changePassword}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input type="text"placeholder="Confirm Password"className="form-control"value={this.state.confirmPassword}onChange={this.changeConfirmPassword}/>
                                    </div>
                                    <div className="btn btn-success"onClick={this.saveUser}style={{ marginTop: "15px" }}> Save
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
            </div>
        );
    }
}
var containerStyle = {
    alertMessage: {
        backgroundColor: "orange",
        fontSize: "1rem",
        fontWeight: "bold",
        color: "white",
        marginTop: "1rem",
        padding: "0.1rem 0.5rem",
      },
}

export default Signup;