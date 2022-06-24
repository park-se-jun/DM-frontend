import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import MainLayout from "../components/MainLayout";

import MatchList from "../components/matchPages/match-list.component";
import Match from "../components/matchPages/match.component";

const BoardCommunity = () => {
  return (
    <MainLayout>

    
      <div className="container">
        <Link to={"/match"}/>
        <Switch>
          <Route exact path={"/match"} component={MatchList}/>
          <Route exact path="/match/:id" component={Match} />
        </Switch>
      </div>
      </MainLayout>
  );
};

export default BoardCommunity;


