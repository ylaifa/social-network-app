import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "antd/dist/antd.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
