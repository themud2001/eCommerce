import React from "react";
import { connect } from "react-redux";
import { FcGoogle } from "react-icons/fc";

import { signIn, changeSignedIn } from "../../actions";
import "./styles.scss";

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "104324073390-am0n6j89k116lasg877tjnc2p15lceaj.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.handleAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.handleAuthChange);
            });
        });
    }

    handleAuthChange = isSignedIn => {
        if(isSignedIn) {
            this.props.changeSignedIn(true);
        } else {
            this.props.changeSignedIn(false);
        }
    }

    render() {
        return (
            <button onClick={() => this.props.signIn(this.auth)} className="google-button">
                <FcGoogle size={30} />
                <span>Continue with Google</span>
            </button>
        );
    }
}

export default connect(null, { signIn, changeSignedIn })(GoogleAuth);