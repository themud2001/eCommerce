import React from "react";
import Card from "../Card";

import "./styles.scss";

const products = [
    { title: "T-Shirt", price: 4.99 },
    { title: "Skirt", price: 14.99 },
    { title: "Hoody", price: 36.99 },
    { title: "Pants", price: 9.99 }
]

const Featured = () => {
    const renderedList = products.map(item => (
        <Card title={item.title} price={item.price} />
    ));

    return (
        <div className="featured">
            <h2>Featured Products</h2>
            <div className="products">
                {renderedList}
            </div>
        </div>
    );
};

export default Featured;