import messages from "../apis/messages";
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
    const { data } = await messages.post(formValues);

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