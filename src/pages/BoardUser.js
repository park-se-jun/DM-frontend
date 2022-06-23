import React, { useState, useEffect, Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import TutorialList from "../components/userPages/tutorials-list.component";
import TutorialAdd from "../components/userPages/tutorial-add.component";
import Tutorial from "../components/userPages/tutorial.component";
import MainLayout from "../components/MainLayout";

const BoardUser = () => {
  return (
    <MainLayout imagePath={"/images/sampleImage5.jpg"} title={"게시글 전체 결과"} detail={"현재까지 올라온 모든 게시글입니다."}>
      <div className="container">
        <Link to={"/tutorial"}/>
        <Switch>
          <Route exact path={"/tutorial"} component={TutorialList}/>
          <Route exact path="/tutorial/add" component={TutorialAdd} />
          <Route exact path="/tutorial/:id" component={Tutorial} />
        </Switch>
      </div>
    </MainLayout>

  );
};

export default BoardUser;


