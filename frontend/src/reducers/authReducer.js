const INITIAL_STATE = {
    isSignedIn: null,
    error: null,
    user: null,
    token: null
};

const authReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case "CHANGE_SIGNED_IN":
            return { ...state, isSignedIn: action.payload };
        case "LOGIN_ERROR":
            return { ...state, error: action.payload };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isSignedIn: true,
                error: null,
                user: action.payload.user,
                token: action.payload.token
            };
        case "SIGNUP_ERROR":
            return { ...state, error: action.payload };
        case "SIGNUP_SUCCESS":
            return {
                ...state,
                isSignedIn: true,
                error: null,
                user: action.payload.user,
                token: action.payload.token
            };
        default:
            return state;
    }
};

export default authReducer;