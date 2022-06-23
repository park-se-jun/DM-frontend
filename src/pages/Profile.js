import React from "react";
import { Redirect } from 'react-router-dom';
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
    </MainLayout>
  );
};

export default Profile;
