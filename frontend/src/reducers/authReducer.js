const INITIAL_STATE = {
    isLoggedIn: null,
    error: null,
    user: null
};

const authReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case "CHANGE_LOGGED_IN":
            return { ...state, isLoggedIn: action.payload };
        case "LOGIN_ERROR":
            return { ...state, error: action.payload };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLoggedIn: true,
                error: null,
                user: action.payload
            };
        case "SIGNUP_ERROR":
            return { ...state, error: action.payload };
        case "SIGNUP_SUCCESS":
            return {
                ...state,
                isLoggedIn: true,
                error: null,
                user: action.payload
            };
        default:
            return state;
    }
};

export default authReducer;