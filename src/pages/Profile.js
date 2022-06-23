import React from "react";
<<<<<<< HEAD
import { Redirect, Route } from "react-router-dom";
=======
import { Redirect } from 'react-router-dom';
>>>>>>> park-se-jun
import { useSelector } from "react-redux";
import MainLayout from "../components/MainLayout";

import MyInfoTap from "../components/myPage/MyInfoTapComponent";
import MyInfoComponent from '../components/myPage/MyInfoComponent';
import MyPostList from '../components/myPage/MyPostList';
import MyComList from '../components/myPage/MyComList';

import MyPageImage from "../resource/images/myPageImage.jpg"
import "../components/myPage/myPage-style.css"

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  // if (!currentUser) {
  //   return <Redirect to="/login" />;
  // }

  return (
<<<<<<< HEAD
    <MainLayout imagePath={MyPageImage} title={"마이페이지"} detail={"본인의 정보, 작성한 게시글 및 댓글 등을 볼 수 있습니다."}>
      <div className="container" style={{marginTop: "100px", marginBottom: "100px", }}>

        <MyInfoTap />
        <MyInfoComponent 
          userName="userName"
          userEmail="userEmail@0000.com"
          userID="userID"
        />
        {/* <MyPostList /> */}
        {/* <MyComList /> */}
      </div>
=======
    <MainLayout imagePath={"/images/sampleImage4.jpg"} title={"마이페이지"} detail={"본인의 정보, 작성한 게시글 및 댓글 등을 볼 수 있습니다."}>
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
        <table className="table table-bordered">
            <tbody>
            <tr>
                <td>
                    <p>
                        <strong>ID</strong>
                    </p>
                </td>
                <td>
                    {currentUser.userid}
                </td>

            </tr>
            <tr>
                <td>
                    <p>
                        <strong>Email</strong>
                    </p>
                </td>
                <td>
                    {currentUser.email}
                </td>
            </tr>
            </tbody>

        </table>
    </div>
>>>>>>> park-se-jun
    </MainLayout>
  );
};

export default Profile;

{/* <strong>{currentUser.username}</strong> Profile */}
{/* <strong>ID:</strong> {currentUser.userid} */}
{/* <strong>Email:</strong> {currentUser.email} */}
{/* {currentUser.roles &&
currentUser.roles.map((role, index) => <li key={index}>{role}</li>)} */}