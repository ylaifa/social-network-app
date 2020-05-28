import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Authenticate } from "../redux/authenticate/Authenticate";

const Register = () => {
  const dispatch = useDispatch();
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const submitForm = () => {
    dispatch(Authenticate(username, email, password));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={event => SetUsername(event.target.value)}
      />
      <input
        type="text"
        value={email}
        placeholder="Email"
        onChange={event => SetEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={event => SetPassword(event.target.value)}
      />
      <button onClick={submitForm} className="m-2 btn btn-primary">
        Registration
      </button>
    </div>
  );
};

export default Register;
