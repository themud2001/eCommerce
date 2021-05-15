const INITIAL_STATE = {
    isSignedIn: null,
    error: "",
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
                user: action.payload.user,
                token: action.payload.token
            };
        default:
            return state;
    }
};

export default authReducer;