export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

/*================= 
    action-type
=================*/

export const fetchRequest = () => {
    console.log("request")
    return {
        type: FETCH_REQUEST
    };
};

export const fetchSuccess = token => {
    console.log("succes")
    return {
        type: FETCH_SUCCESS,
        token
    };
};

export const fetchFailure = error => {
    console.log("failure")
    return {
        type: FETCH_FAILURE,
        error
    };
};