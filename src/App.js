import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import BoardDisease from "./pages/BoardDisease";
import BoardSymptom from "./pages/BoardSymptom";

import BoardUser from "./pages/BoardUser";
import BoardModerator from "./pages/BoardModerator";
import BoardAdmin from "./pages/BoardAdmin";
import BoardDisease from "./pages/BoardDisease";
import BoardSymptom from "./pages/BoardSymptom";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
import community from "./pages/community";
import Post from "./pages/Post";

const App = () => {

  return (
    <Router history={history}>
      <div>

        <div className="container-fluid m-0 p-0">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path = "/community" component={community} />
            <Route exact path = "/community/:id" component ={Post}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/disease" component={BoardDisease} />
            <Route path="/symptom" component={BoardSymptom} />

            <Route path="/tutorial" component={BoardUser} />
          </Switch>
        </div>

        {/* <AuthVerify logOut={logOut}/> */}
      </div>
    </Router>
  );
};
export default App;
