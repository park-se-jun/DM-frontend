import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import PostPageImage from "../resource/images/postPageImage.jpg";

import CommunityList from "../components/communityPages/community-list.component";
import CommunityAdd from "../components/communityPages/community-add.component";
import Community from "../components/communityPages/community.component";
import MainLayout from "../components/MainLayout";

const BoardCommunity = () => {
  return (
    <MainLayout
      imagePath={PostPageImage}
      title={"게시글 전체 결과"}
      detail="현재까지 올라온 모든 게시글입니다."
    >
      <div className="container">
        <Link to={"/match"} />
        <Switch>
          <Route exact path={"/community"} component={CommunityList} />
          <Route exact path="/community/add" component={CommunityAdd} />
          <Route exact path="/community/:id" component={Community} />
        </Switch>
      </div>
    </MainLayout>
  );
};

export default BoardCommunity;
