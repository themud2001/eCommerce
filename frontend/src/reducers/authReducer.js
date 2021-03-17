const INITIAL_STATE = {
    authObject: {},
    isSignedIn: null
};

const authReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case "CHANGE_SIGNED_IN":
            return { ...state, isSignedIn: action.payload };
        case "UPDATE_GOOGLE_AUTH_OBJECT":
            return { ...state, authObject: action.payload };
        default:
            return state;
    }
};

export default authReducer;