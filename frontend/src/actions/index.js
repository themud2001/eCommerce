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

export const changeLoggedIn = isLoggedIn => {
    return {
        type: "CHANGE_LOGGED_IN",
        payload: isLoggedIn
    };
};

export const googleSignIn = () => async dispatch => {
    authObject.then(async object => {
        await object.signIn();
        dispatch(changeLoggedIn(true));
        history.push("/");
    });
};

export const googleSignOut = () => async dispatch => {
    authObject.then(async object => {
        await object.signOut();
        dispatch(changeLoggedIn(false));
    });    
};

export const logInError = ({ error }) => {
    return {
        type: "LOGIN_ERROR",
        payload: error
    };
};

export const logInSuccess = user => {
    return {
        type: "LOGIN_SUCCESS",
        payload: user
    };
};

export const logIn = (email, password) => async dispatch => {
    try {
        const { data } = await api.post("/auth/login", { email, password });
        dispatch(logInSuccess(data.user));
    } catch ({ response }) {
        dispatch(logInError(response.data));
    }
};

export const signUpError = ({ error }) => {
    return {
        type: "SIGNUP_ERROR",
        payload: error
    };
};

export const signUpSuccess = user => {
    return {
        type: "SIGNUP_SUCCESS",
        payload: user
    };
};

export const signUp = (username, email, password) => async dispatch => {
    try {
        const { data } = await api.post("/auth/signup", { username, email, password });
        dispatch(signUpSuccess(data.user));
    } catch ({ response }) {
        dispatch(signUpError(response.data));
    }
};

export const authenticate = () => async dispatch => {
    try {
        const { data } = await api.get("/auth");
        dispatch(logInSuccess(data.user));
    } catch ({ response }) {
        console.error(response.data.error);
    }
};