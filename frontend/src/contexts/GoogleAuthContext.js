import React from "react";
import { connect } from "react-redux";

import { changeSignedIn } from "../actions";

const Context = React.createContext();

export class GoogleAuth extends React.Component {
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
            <Context.Provider value={this.auth}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default connect(null, { changeSignedIn })(Context);