import React from "react";
import { connect } from "react-redux";

import authObject from "../../GoogleAuth";
import { changeLoggedIn } from "../../actions";

class GoogleAuth extends React.Component {
    componentDidMount() {
        authObject.then(object => {
            this.handleAuthChange(object.isSignedIn.get());
            object.isSignedIn.listen(this.handleAuthChange);
        });
    }

    handleAuthChange = isLoggedIn => {
        if(isLoggedIn) {
            this.props.changeLoggedIn(true);
        }
    }

    render() {
        return null;
    }
}

export default connect(null, { changeLoggedIn })(GoogleAuth);