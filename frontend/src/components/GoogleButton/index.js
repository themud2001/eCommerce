import React from "react";
import { FcGoogle } from "react-icons/fc";
import { connect } from "react-redux";

import { signIn } from "../../actions";
import "./styles.scss";

const GoogleButton = props => {
    return (
        <button onClick={() => props.signIn()} className="google-button">
            <FcGoogle size={30} />
            <span>Continue with Google</span>
        </button>
    );
};

export default connect(null, { signIn })(GoogleButton);