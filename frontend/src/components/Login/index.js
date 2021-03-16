import React from "react";
import { Link } from "react-router-dom";

import Form from "../Form";
import GoogleAuth from "../GoogleAuth";
import "./styles.scss";

class Login extends React.Component {
    render() {
        return (
            <div className="login-container">
                <div className="header">
                    <h1>Sign In</h1>
                </div>

                <div className="form-container">
                    <Form>
                        <label htmlFor="usernameEmail">Username or E-mail</label>
                        <input name="usernameEmail" validationOptions={{ required: true }} />

                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" validationOptions={{ required: true }} />

                        <button type="submit">SIGN IN</button>
                    </Form>
                </div>

                <div className="alternative">
                    <p>Or</p>
                    <Link to="/signup">Create a new account</Link>
                </div>

                <div className="google-container">
                    <GoogleAuth />
                </div>
            </div>
        );
    }
}

export default Login;