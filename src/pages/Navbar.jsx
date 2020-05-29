import React from "react";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const logout = () => {
    Cookies.remove("token");
    console.log("logout");
  };
  return (
    <>
      <h3>Navbar</h3>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/profile">Profile</Link>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Navbar;
