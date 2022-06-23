import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";

import DiseasesList from "../components/diseasePages/diseases-list.component";
import DiseaseAdd from "../components/diseasePages/disease-add.component";
import Disease from "../components/diseasePages/disease.component";
import AdminPageImage from "../resource/images/adminPageImage.jpg"

import Header from '../components/Header';
const imagePath=AdminPageImage;

const BoardDisease = () => {
  return (
  <div>
      <Box
        class="Imagese"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url(${imagePath})`,
          overflow: "hidden",
          width: "100%",
          // 높이 수정(사진 사이즈는 vh에 따라 변경X)
          height: "385px",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="container">
        <Typography
          style={{  textAlign: "center", fontSize: "36px", fontWeight: 700 }}
        >
          {"질병 정보 확인"}
        </Typography>
        <Typography
          style={{  textAlign: "center", fontSize: "20px", fontWeight: 400 }}
        >
          {"현재 서비스에 등록된 질병들을 확인/관리할 수 있습니다."}
        </Typography>
        </div>
      </Box>
      <div className="container">
        <Header color="#D4FFC0" />
        
        <Link to={"/disease"}/>
        <Switch>
          <Route exact path={"/disease"} component={DiseasesList}/>
          <Route exact path="/disease/add" component={DiseaseAdd} />
          <Route exact path="/disease/:id" component={Disease} />
        </Switch>
      </div>
  </div>

  );
};

export default BoardDisease;


