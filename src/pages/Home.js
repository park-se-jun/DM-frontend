import React, { useState, useEffect } from "react";
import MainLayout from "../components/MainLayout";

import UserService from "../services/user.service";
import Disease from "../components/disease/Disease.js";
const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <MainLayout
      imagePath={"images/sampleImage1.jpg"}
      title={"증상 별 질병 확인"}
      detail={
        "아래의 증상 중, 현재 겪고있는 것을 선택한 후 결과를 확인해주세요."
      }
    >
      <div className="container">
        <Disease />
        {/* <header className="jumbotron">
          <h3>{content}</h3>
        </header> */}
      </div>
    </MainLayout>
  );
};

export default Home;
