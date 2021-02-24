import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Dropdown = ({ text, ...props }) => {
    return (
        <a {...props}>
            {text}
            <FiChevronDown />
        </a>
    );
};

export default Dropdown;