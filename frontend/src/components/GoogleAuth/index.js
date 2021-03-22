import React from "react";
import { connect } from "react-redux";

import authObject from "../../GoogleAuth";
import { changeSignedIn } from "../../actions";

class GoogleAuth extends React.Component {
    componentDidMount() {
        authObject.then(object => {
            this.handleAuthChange(object.isSignedIn.get());
            object.isSignedIn.listen(this.handleAuthChange);
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

export default connect(null, { changeSignedIn })(GoogleAuth);