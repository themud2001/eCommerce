import React from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

import "./styles.scss";

class User extends React.Component {
    render() {
        return (
            <Link to="/login" className="item user"><FiUser size={22} /></Link>
        );
    }
}

export default User;