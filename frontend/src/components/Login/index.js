import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { logIn } from "../../actions";
import Form from "../Form";
import GoogleButton from "../GoogleButton";
import "./styles.scss";

class LogIn extends React.Component {
    handleFormSubmit = ({ email, password }) => {
        this.props.logIn(email, password);
    }

    render() {
        if(this.props.isLoggedIn) {
            return <Redirect to="/" />;
        }

        return (
            <div className="login-container">
                <div className="header">
                    <h1>Log In</h1>
                </div>

                <div className="form-container">
                    {this.props.error && <p className="error-messages">{this.props.error}</p>}

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
        isLoggedIn: state.auth.isLoggedIn,
        error: state.auth.error,
        user: state.auth.user
    };
};

export default connect(mapStateToProps, { logIn })(LogIn);