import React, { Component } from 'react';
import './loginregister.css';
import loadGif from './loadinggif.gif'

class LoginRegister extends Component {
    state = { 
        displayLogin: true,
        displayLoading: false,
        registerTerms: false,
        loginRemember: false,
        errMessage: ''
     }


     setDisplayLogin = (flag) => {
        this.setState({displayLogin: flag});
     }

     toggleChangeRegisterTerms = () => {
        this.setState({
            registerTerms: !this.state.registerTerms
          });
     }

     toggleChangeLoginRemember = () => {
        this.setState({
            loginRemember: !this.state.loginRemember
          });
     }


     loginSubmit = (e) => {

        e.preventDefault();
        let formData = new FormData(e.target);
        let object = {};

        formData.forEach(function(value, key) {
            object[key] = value;
        });

        if(object.username.trim().length == 0) {
            this.setState({errMessage: 'Please enter the username field.'});
            return null;
        }

        if(object.password.trim().length == 0) {
            this.setState({errMessage: 'Please enter the password field.'});
            return null;
        }

        //send

        e.target.reset();
     }


     registerSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let object = {};

        formData.forEach(function(value, key) {
            object[key] = value;
        });

        /*
            email: ""
            firstname: ""
            lastname: ""
            password: ""
        */


        if(object.firstname.trim().length == 0) {
            this.setState({errMessage: 'Please enter the first name field.'});
            return null;
        }

        if(object.lastname.trim().length == 0) {
            this.setState({errMessage: 'Please enter the last name field.'});
            return null;
        }


        if(object.email.trim().length == 0) {
            this.setState({errMessage: 'Please enter the email field.'});
            return null;
        }


        if(object.password.trim().length == 0) {
            this.setState({errMessage: 'Please enter the password field.'});
            return null;
        }


        //console.log(object);

        if(!this.state.registerTerms) {
            //error terms its not selected
            this.setState({errMessage: 'Accept terms to register'});
        } else {
            //send
            e.target.reset();
        }                      
     }
    render() { 
        return ( 
            <div className="lr">  

                {
                    this.state.displayLogin && !this.state.displayLoading ? (
                        <div className="lr-loginContainer bounce-in-top">
                            <span className="lr-loginHeader" onClick={() => this.setState({displayLogin: false})}>
                                <p className="lr-loginHeader-create">Create an account</p>
                                <p className="lr-loginHeader-signin"><i className="far fa-user"></i> Sign Up</p>
                            </span>
                            <form onSubmit={this.loginSubmit} autoComplete="off">
                                <div className="lr-loginBody">
                                    <div className="lr-loginBody-field">
                                        <label className="lr-loginBody-field-label">Username</label>
                                        <input type="text" name="username" className="lr-loginBody-field-input"></input>
                                    </div>
                                    <div className="lr-loginBody-field">
                                        <label className="lr-loginBody-field-label">Password</label>
                                        <input type="password" name="password" className="lr-loginBody-field-input"></input>
                                    </div>
                                    <div className="lr-loginBody-field">
                                        <input type="checkbox" name="loginRemember" className="lr-visibility" checked={this.state.loginRemember} onChange={this.toggleChangeLoginRemember} id="loginRemember"></input>
                                        <label className={this.state.loginRemember ? ('lr-check lr-check-on'): ('lr-check')} htmlFor="loginRemember"></label>
                                        <label className="lr-check-label"  htmlFor="loginRemember">Remember my password</label>
                                    </div>
                                    <div className="lr-loginBody-field">
                                        <button type="submit" className="lr-loginBody-button">Sign In</button>
                                    </div>
                                </div>
                            </form>                            
                        </div>
                    ): ("")                
                }

                {
                    !this.state.displayLogin && !this.state.displayLoading ? (
                        <div className="lr-createContainer bounce-in-top">
                            <span className="lr-loginHeader" onClick={() => this.setState({displayLogin: true})}>
                                <p className="lr-loginHeader-create">Log in your account</p>
                                <p className="lr-loginHeader-signin"><i className="far fa-user"></i> Sign In</p>
                            </span>
                            <div className="lr-loginBody">
                                <form onSubmit={this.registerSubmit}  autoComplete="off">
                                    <div className="lr-loginBody-field">
                                        <label className="lr-loginBody-field-label">First name</label>
                                        <input type="text" name="firstname" className="lr-loginBody-field-input"></input>
                                    </div>
                                    <div className="lr-loginBody-field">
                                        <label className="lr-loginBody-field-label">Last name</label>
                                        <input type="text" name="lastname" className="lr-loginBody-field-input"></input>
                                    </div>
                                    <div className="lr-loginBody-field">
                                        <label className="lr-loginBody-field-label">Email</label>
                                        <input type="text" name="email" className="lr-loginBody-field-input"></input>
                                    </div>
                                    <div className="lr-loginBody-field">
                                        <label className="lr-loginBody-field-label">Password</label>
                                        <input type="password" name="password" className="lr-loginBody-field-input"></input>
                                    </div>
                                    <div className="lr-loginBody-field">
                                        <input type="checkbox" name="registerTerms" className="lr-visibility" checked={this.state.registerTerms} onChange={this.toggleChangeRegisterTerms} id="registerTerms"></input>
                                        <label className={this.state.registerTerms ? ('lr-check lr-check-on'): ('lr-check')}  htmlFor="registerTerms"></label>
                                        <label className="lr-check-label"  htmlFor="registerTerms">I accept the terms</label>
                                    </div>
                                    <div className="lr-loginBody-field">
                                        <button type="submit" className="lr-loginBody-button">Sign Up</button>
                                    </div>
                                </form>                                
                            </div>
                        </div>
                    ): ("")                    
                }
                                  
                {
                    !this.state.displayLoading ? (
                        <a className="lr-facebook bounce-in-bottom">
                            <i className="fab fa-facebook-f"></i> Sign up with Facebook
                        </a>
                    ): ("")
                }
               
                
                {
                    this.state.errMessage.trim().length > 0 ? ( 
                        <div className="lr-popup slide-in-right">
                            <button className="lr-popup-btn" onClick={() => this.setState({ errMessage: '' })}><i className="fas fa-times"></i></button>
                            <div>
                                <i className="fas fa-exclamation-triangle lr-popup-icon"></i>
                            </div>
                            <div>
                                <h4 className="lr-popup-title">Ops, something went wrong.</h4>
                                <p className="lr-popup-parag">{this.state.errMessage}</p>
                            </div>
                        </div>
                    ): ("")
                }                

                {
                    this.state.displayLoading ? (
                        <div className="lr-loading">
                            <img src={loadGif} className="lr-loading-gif" alt="loading..."></img>
                        </div>
                    ): ("")
                }                
      
          </div>
         );
    }
}
 
export default LoginRegister;