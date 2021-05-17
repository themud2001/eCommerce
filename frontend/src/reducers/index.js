import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
    cart: cartReducer,
    auth: authReducer,
    products: productsReducer
});