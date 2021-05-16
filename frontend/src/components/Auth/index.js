import React from "react";
import { connect } from "react-redux";

import { authenticate } from "../../actions";

class Auth extends React.Component {
    componentDidMount() {
        this.props.authenticate();
    }

    render() {
        return null;
    }
}

export default connect(null, { authenticate })(Auth);