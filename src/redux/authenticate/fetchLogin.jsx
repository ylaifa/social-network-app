import { fetchRequest, fetchSuccess, fetchFailure } from "./action";
import Cookies from "js-cookie";

/*================= 
     fetch API
=================*/

export const fetchLogin = user => {
  return dispatch => {
    dispatch(fetchRequest(user));
    fetch("https://api-minireseausocial.mathis-dyk.fr/auth/local", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          console.log(response);
          dispatch(fetchSuccess(response.user));
          Cookies.set("token", response.jwt);
          Cookies.set("user", user);
        } else {
          dispatch(fetchFailure(response.message));
        }
      });
  };
};
