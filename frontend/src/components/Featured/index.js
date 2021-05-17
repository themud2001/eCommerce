import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getProducts } from "../../actions";
import Card from "../Card";
import "./styles.scss";

// const products = [
//     { id: 1, title: "T-Shirt", price: 4.99 },
//     { id: 2, title: "Skirt", price: 14.99 },
//     { id: 3, title: "Hoody", price: 36.99 },
//     { id: 4 , title: "Pants", price: 9.99 }
// ];

const Featured = ({ error, products, getProducts }) => {
    useEffect(() => {
        getProducts();
    }, []);

    const renderedList = products.map(item => (
        <Card
            key={item.title}
            id={item._id}
            title={item.title}
            price={item.price}
        />
    ));

    return (
        <div className="featured">
            <h2>Featured Products</h2>
            {
                error ?
                <p className="error">{error}</p> :
                <div className="products">
                    {renderedList}
                </div>
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        error: state.products.error,
        products: state.products.products
    };
};

export default connect(mapStateToProps, { getProducts })(Featured);