import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../redux/authenticate/fetchLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    identifier: "",
    password: ""
  });
  const { identifier, password } = inputs;
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  };

  const submitForm = () => {
    dispatch(fetchLogin(inputs));
  };

  return (
    <div>
      <input
        type="text"
        name="identifier"
        value={inputs.identifier}
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={inputs.password}
        onChange={handleChange}
      />
      <button onClick={submitForm} className="m-2 btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default Login;
