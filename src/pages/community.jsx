import {
  IconButton,
  InputAdornment,
  InputBase,
  TextField,
  Button,
} from "@material-ui/core";
import React from "react";
import MainLayout from "../components/MainLayout";
import PostPreviewComponent from "../components/PostPreviewComponent";
import SearchIcon from "@material-ui/icons/Search";
function community() {
  return (
    <MainLayout
      imagePath={"/images/sampleImage1.jpg"}
      title={"게시글 전체 경과"}
      detail="현재까지 올라온 모든 게시글입니다."
    >
      <div className="container">
        <div>
          <TextField
            type="search"
            placeholder="어떤 증상이 동반될까?"
            InputProps={{
              endAdornment: (
                <IconButton className="p-0" aria-label="search">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </div>

        <PostPreviewComponent
          title={"작성한 타이틀"}
          detail={
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex'
          }
          symtomArray={[
            { name: "두통", value: "5" },
            { name: "복통", value: "5" },
            { name: "인후통", value: "5" },
          ]}
          commentNumber={20}
          author={"박세준"}
          date={"오늘"}
        />
      </div>
    </MainLayout>
  );
}

export default community;
