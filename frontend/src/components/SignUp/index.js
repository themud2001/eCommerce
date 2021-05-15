import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { signUp } from "../../actions";
import history from "../../history";
import Form from "../Form";
import "./styles.scss";

class SignUp extends React.Component {
    handleFormSubmit = ({ username, email, password }) => {
        this.props.signUp(username, email, password);
    }

    render() {
        if(this.props.isSignedIn) {
            history.push("/");
            return null;
        }

        return (
            <div className="signup-container">
                <div className="header">
                    <h1>Sign Up</h1>
                </div>

                <div className="form-container">
                    {this.props.error && <p className="error-messages">{this.props.error}</p>}

                    <Form onSubmit={this.handleFormSubmit}>
                        <label htmlFor="username">Username</label>
                        <input name="username" validationOptions={{ required: true }} />

                        <label htmlFor="email">E-mail</label>
                        <input
                            name="email"
                            validationOptions={{
                                required: true,
                                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
                            }}
                        />

                        <label htmlFor="password">Password</label>
                        <input 
                            name="password"
                            type="password"
                            validationOptions={{ required: true, minLength: 8 }}
                        />

                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            name="confirmPassword"
                            type="password"
                            validationOptions={{ required: true }}
                        />

                        <button type="submit">SIGN UP</button>
                    </Form>
                </div>

                <div className="alternative">
                    <Link to="/login">Already have an account?</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn,
        error: state.auth.error,
        user: state.auth.user
    };
};

export default connect(mapStateToProps, { signUp })(SignUp);