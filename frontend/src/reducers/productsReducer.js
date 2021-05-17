const INITIAL_STATE = {
    error: null,
    products: []
};

const productsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case "PRODUCTS_ERROR":
            return { ...state, error: action.payload, products: [] };
        case "PRODUCTS_SUCCESS":
            return { ...state, products: action.payload, error: null };
        default:
            return state;
    }
};

export default productsReducer;