import React from 'react';
import './Login.css';

export default class Login extends React.Component {
    render() {
        return(
            <div className="login-form">
                <div className="container">
                    <div className="row">
                        <div className="form-box offset-md-3 col-md-6">
                            <h2>Login Form</h2>
                            <form method="post">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name="username" id="username" placeholder="Username" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" id="password" placeholder="Password" className="form-control" />
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