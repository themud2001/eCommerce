import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logIn } from "../../actions";
import history from "../../history";
import Form from "../Form";
import GoogleButton from "../GoogleButton";
import "./styles.scss";

class LogIn extends React.Component {
    handleFormSubmit = ({ email, password }) => {
        this.props.logIn(email, password);
    }

    render() {
        if(this.props.isSignedIn) {
            history.push("/");
            return null;
        }

        return (
            <div className="login-container">
                <div className="header">
                    <h1>Log In</h1>
                </div>

                <div className="form-container">
                    {this.props.error && <p className="error-messages">{this.props.error}</p>}
                    {this.props.user && `Welcome ${this.props.user.username}!`}

                    <Form onSubmit={this.handleFormSubmit}>
                        <label htmlFor="email">E-mail</label>
                        <input
                            name="email"
                            validationOptions={{
                                required: true,
                                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
                            }}
                        />

                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" validationOptions={{ required: true }} />

                        <button type="submit">LOG IN</button>
                    </Form>
                </div>

                <div className="alternative">
                    <p>Or</p>
                    <Link to="/signup">Create a new account</Link>
                </div>

                <div className="google-container">
                    <GoogleButton />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn,
        error: state.auth.error,
        user: state.auth.user,
        token: state.auth.token
    };
};

export default connect(mapStateToProps, { logIn })(LogIn);