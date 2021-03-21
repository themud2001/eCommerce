import React from "react";
import { connect } from "react-redux";

import authObject from "../../GoogleAuth";
import { changeSignedIn, updateGoogleAuthObject } from "../../actions";

class GoogleAuth extends React.Component {
    async componentDidMount() {
        console.log(await authObject);
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "104324073390-am0n6j89k116lasg877tjnc2p15lceaj.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.handleAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.handleAuthChange);
                this.props.updateGoogleAuthObject(this.auth);
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
        return null;
    }
}

export default connect(null, { changeSignedIn, updateGoogleAuthObject })(GoogleAuth);