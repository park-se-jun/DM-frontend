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

// import BoardMatch from "./pages/BoardMatch";
import BoardCommunity from "./pages/BoardCommunity";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
import community from "./pages/community";

const App = () => {
  return (
    <Router history={history}>
      <div>
        
        <div className="container mt-3">
          <Switch>
            <Route exact path="/" component={Home} />
            {/*<Route exact path={["/", "/match"]} component={Home} />*/}
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/disease" component={BoardDisease} />
            <Route path="/symptom" component={BoardSymptom} />
            <Route path="/tmpCommunity"component={community}/>
            {/*<Route path="/match" component={BoardMatch} />*/}
            <Route path="/community" component={BoardCommunity} />
          </Switch>
        </div>

        {/* <AuthVerify logOut={logOut}/> */}
      </div>
    </Router>
  );
};

export default App;
