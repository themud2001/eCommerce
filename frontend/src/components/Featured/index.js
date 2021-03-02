import React from "react";
import Card from "../Card";

import "./styles.scss";

const products = [
    { id: 1, title: "T-Shirt", price: 4.99 },
    { id: 2, title: "Skirt", price: 14.99 },
    { id: 3, title: "Hoody", price: 36.99 },
    { id: 4 , title: "Pants", price: 9.99 }
];

const Featured = () => {
    const renderedList = products.map(item => (
        <Card
            key={item.title}
            id={item.id}
            title={item.title}
            price={item.price}
        />
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