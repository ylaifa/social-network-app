import { fetchRequest, fetchSuccess, fetchFailure } from "./action";

export const fetchPosts = ({ URL }) => {
  console.log(URL);
  return dispatch => {
    dispatch(fetchRequest());
    fetch(URL, {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response) {
          dispatch(fetchSuccess(response));
        } else {
          dispatch(fetchFailure(response.message));
        }
      });
  };
};
