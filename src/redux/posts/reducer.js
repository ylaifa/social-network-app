import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE,
} from "./action";

const initialState = {
    loading: false,
    posts: [],
    errorMessage: "",
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                    posts: action.posts,
                    errorMessage: "",
            };
        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                    posts: [],
                    errorMessage: action.error,
            };
        default:
            return state;
    }
};