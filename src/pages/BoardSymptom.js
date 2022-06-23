import React, { useState, useEffect, Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";

import SymptomList from "../components/symptomPages/symptom-list.component";
import SymptomAdd from "../components/symptomPages/symptom-add.component";
import Symptom from "../components/symptomPages/symptom.component";
import AdminPageImage from "../resource/images/adminPageImage.jpg"

import Header from '../components/Header';
const imagePath=AdminPageImage;

const BoardSymptom = () => {
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
          {"증상 정보 확인"}
        </Typography>
        <Typography
          style={{  textAlign: "center", fontSize: "20px", fontWeight: 400 }}
        >
          {"현재 서비스에 등록된 증상 확인/관리할 수 있습니다."}
        </Typography>
        </div>
      </Box>
      <div className="container">
        <Header color="#D4FFC0" />
        
        <Link to={"/disease"}/>
        <Switch>
          <Route exact path={"/symptom"} component={SymptomList}/>
          <Route exact path="/symptom/add" component={SymptomAdd} />
          <Route exact path="/symptom/:id" component={Symptom} />
        </Switch>
      </div>
  </div>
    );
};

export default BoardSymptom;