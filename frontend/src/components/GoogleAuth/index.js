import React from "react";
import { FcGoogle } from "react-icons/fc";

import "./styles.scss";

class GoogleAuth extends React.Component {
    render() {
        return (
            <button className="google-button">
                <FcGoogle size={30} />
                <span>Sign in with Google</span>
            </button>
        );
    }
}

export default GoogleAuth;