import React, { useState, useEffect, Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import TutorialList from "../components/userPages/tutorials-list.component";
import TutorialAdd from "../components/userPages/tutorial-add.component";
import Tutorial from "../components/userPages/tutorial.component";

const BoardUser = () => {
  return (
      <div className="container">
        <Link to={"/tutorial"}/>
        <Switch>
          <Route exact path={"/tutorial"} component={TutorialList}/>
          <Route exact path="/tutorial/add" component={TutorialAdd} />
          <Route exact path="/tutorial/:id" component={Tutorial} />
        </Switch>
      </div>
  );
};

export default BoardUser;


