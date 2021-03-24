import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./styles.scss";
import history from "../../history";
import Form from "../Form";

class SignUp extends React.Component {
    componentDidMount() {
        if(this.props.isSignedIn) {
            history.push("/");
        }
    }

    render() {
        return (
            <div className="signup-container">
                <div className="header">
                    <h1>Sign Up</h1>
                </div>

                <div className="form-container">
                    <Form>
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
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(SignUp);