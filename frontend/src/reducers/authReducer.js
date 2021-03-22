const INITIAL_STATE = {
    isSignedIn: null
};

const authReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case "CHANGE_SIGNED_IN":
            return { ...state, isSignedIn: action.payload };
        default:
            return state;
    }
};

export default authReducer;