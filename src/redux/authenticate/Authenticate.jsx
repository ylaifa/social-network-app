import { fetchRequest, fetchSuccess, fetchFailure } from "./action";
import Cookies from "js-cookie";

/*================= 
     fetch API
=================*/

export const Authenticate = (username, email, password) => {
  const data = {
    username,
    email,
    password
  };

  return dispatch => {
    dispatch(fetchRequest());
    fetch("https://api-minireseausocial.mathis-dyk.fr/auth/local/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          dispatch(fetchSuccess(response));
          Cookies.set("token", response.jwt);
        } else {
          dispatch(fetchFailure(response.message));
        }
      });
  };
};
