import React from "react";
import Card from "../Card";

import "./styles.scss";

const Featured = () => {
    return (
        <div className="featured">
            <h2>Featured Products</h2>
            <div className="products">
                <Card />
            </div>
        </div>
    );
};

export default Featured;