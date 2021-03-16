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
                    <h1>Log In</h1>
                </div>

                <div className="form-container">
                    <Form>
                        <label htmlFor="usernameEmail">Username or E-mail</label>
                        <input name="usernameEmail" validationOptions={{ required: true }} />

                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" validationOptions={{ required: true }} />

                        <button type="submit">LOG IN</button>
                    </Form>
                </div>

                <div className="alternative">
                    <p>Or</p>
                    <Link to="/register">Create a new account</Link>
                </div>

                <div className="google-container">
                    <GoogleAuth />
                </div>
            </div>
        );
    }
}

export default Login;