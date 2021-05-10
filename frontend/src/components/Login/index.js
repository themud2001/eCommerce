import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import history from "../../history";
import api from "../../apis/messages";
import Form from "../Form";
import GoogleButton from "../GoogleButton";
import "./styles.scss";

class LogIn extends React.Component {
    state = { error: "" };
    
    componentDidMount() {
        if(this.props.isSignedIn) {
            history.push("/");
        }
    }

    handleFormSubmit = async ({ email, password }) => {
        try {
            const { data } = await api.post("/auth/login", { email, password });
            console.log(data);
        } catch ({ response }) {
            this.setState({ error: response.data.error });
        }
    }

    render() {
        return (
            <div className="login-container">
                <div className="header">
                    <h1>Log In</h1>
                </div>

                <div className="form-container">
                    <p className="error-messages">{this.state.error}</p>

                    <Form onSubmit={this.handleFormSubmit}>
                        <label htmlFor="email">E-mail</label>
                        <input name="email" validationOptions={{ required: true }} />

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
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(LogIn);