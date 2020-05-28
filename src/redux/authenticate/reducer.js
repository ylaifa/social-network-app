import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE,
} from "./action";

const initialState = {
    loading: false,
    token: "",
    errorMessage: ""
};

const authenticateReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                    token: action.token.jwt,
                    errorMessage: ""
            };
        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                    token: "",
                    errorMessage: action.error
            };
        default:
            return state;
    }
};

export default authenticateReducer;