import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getProducts } from "../../actions";
import Card from "../Card";
import "./styles.scss";

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