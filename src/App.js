import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

import BoardDiseaseUser from "./pages/BoardDiseaseUser";
import BoardDisease from "./pages/BoardDisease";
import BoardSymptom from "./pages/BoardSymptom";

import BoardMatch from "./pages/BoardMatch";
import BoardCommunity from "./pages/BoardCommunity";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";


const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <Router history={history}>
      <div>
        

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/match"]} component={BoardMatch} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/diseaseuser" component={BoardDiseaseUser} />
            <Route path="/disease" component={BoardDisease} />
            <Route path="/symptom" component={BoardSymptom} />

            <Route path="/match" component={BoardMatch} />
            <Route path="/community" component={BoardCommunity} />

          </Switch>
        </div>

        {/* <AuthVerify logOut={logOut}/> */}
      </div>
    </Router>
  );
};

export default App;
