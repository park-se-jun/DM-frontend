import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import DiseasesList from "../components/diseaseUserPages/disease-list.component";
import Disease from "../components/diseaseUserPages/disease.component";
import MainLayout from "../components/MainLayout";

const BoardDiseaseUser = () => {
  return (
    <MainLayout
      
    >
      <div className="container">
        <Link to={"/diseaseuser"}/>
        <Switch>
          <Route exact path={"/diseaseuser"} component={DiseasesList}/>
          <Route exact path="/diseaseuser/:id" component={Disease} />
        </Switch>
      </div>
      </MainLayout>
  );
};

export default BoardDiseaseUser;


