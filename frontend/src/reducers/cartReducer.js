import _ from "lodash";

const cartReducer = (state={}, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return { ...state, action.payload };
        case "REMOVE_FROM_CART":
            return _.omit(state, action.payload);
    }
};

export default cartReducer;