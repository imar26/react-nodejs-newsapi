import React from 'react';
import './Login.css';

export default class Login extends React.Component {
    login(event) {
        event.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        var baseUrl = "";
        if(process.env.NODE_ENV === 'development') {
            baseUrl = "http://localhost:5000";
        } else {
            baseUrl = "";
        }
        
        fetch(baseUrl + "/login?username=" + username + "&password=" + password)
            .then((response) => {
                if(response.ok) {
                    console.log("Yes")
                } else {
                    console.log("Here");
                }
            }, (error) => {
                console.log(error);
            });
    }
    render() {
        return(
            <div className="login-form">
                <div className="container">
                    <div className="row">
                        <div className="form-box offset-md-3 col-md-6">
                            <h2>Login Form</h2>
                            <form method="post" onSubmit={this.login.bind(this)}>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name="username" id="username" ref="username" placeholder="Username" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" id="password" ref="password" placeholder="Password" className="form-control" />
                                </div>
                                <div className="button">
                                    <input type="submit" className="submit btn btn-primary" value="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}