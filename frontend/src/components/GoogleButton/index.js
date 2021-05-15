import React from "react";
import { FcGoogle } from "react-icons/fc";
import { connect } from "react-redux";

import { googleSignIn } from "../../actions";
import "./styles.scss";

const GoogleButton = props => {
    return (
        <button onClick={() => props.googleSignIn()} className="google-button">
            <FcGoogle size={30} />
            <span>Continue with Google</span>
        </button>
    );
};

export default connect(null, { googleSignIn })(GoogleButton);