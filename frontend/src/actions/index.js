import api from "../apis/api";
import history from "../history";
import authObject from "../GoogleAuth";

export const addToCart = item => {
    return {
        type: "ADD_TO_CART",
        payload: item
    };
};

export const removeFromCart = id => {
    return {
        type: "REMOVE_FROM_CART",
        payload: id
    };
};

export const sendContactMessage = formValues => async dispatch => {
    const { data } = await api.post(formValues);

    dispatch({ type: "SEND_CONTACT_MESSAGE", payload: data });
};

export const changeSignedIn = isSignedIn => {
    return {
        type: "CHANGE_SIGNED_IN",
        payload: isSignedIn
    };
};

export const googleSignIn = () => async dispatch => {
    authObject.then(async object => {
        await object.signIn();
        dispatch(changeSignedIn(true));
        history.push("/");
    });
};

export const googleSignOut = () => async dispatch => {
    authObject.then(async object => {
        await object.signOut();
        dispatch(changeSignedIn(false));
    });    
};

export const logInError = ({ error }) => {
    return {
        type: "LOGIN_ERROR",
        payload: error
    };
};

export const logInSuccess = data => {
    return {
        type: "LOGIN_SUCCESS",
        payload: data
    };
};

export const logIn = (email, password) => async dispatch => {
    try {
        const { data } = await api.post("/auth/login", { email, password });
        dispatch(logInSuccess(data));
    } catch ({ response }) {
        dispatch(logInError(response.data));
    }
};