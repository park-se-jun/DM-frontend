import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import MainLayout from "../components/MainLayout";

import MyInfoTap from "../components/myPage/MyInfoTapComponent";
import MyInfoComponent from '../components/myPage/MyInfoComponent';

import MyPageImage from "../resource/images/myPageImage.jpg"
import "../components/myPage/myPage-style.css"

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <MainLayout imagePath={MyPageImage} title={"마이페이지"} detail={"본인의 정보, 작성한 게시글 및 댓글 등을 볼 수 있습니다."}>

        <MyInfoTap />
        <MyInfoComponent 
          userName={currentUser.username}
          userEmail={currentUser.email}
          userID={currentUser.userid}
        />
    </MainLayout>
  );
};

export default Profile;
