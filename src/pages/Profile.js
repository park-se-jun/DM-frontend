import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import MainLayout from "../components/MainLayout";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <MainLayout imagePath={"/images/sampleImage4.jpg"} title={"마이페이지"} detail={"본인의 정보, 작성한 게시글 및 댓글 등을 볼 수 있습니다."}>
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>ID:</strong> {currentUser.userid}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>
    </MainLayout>
  );
};

export default Profile;
