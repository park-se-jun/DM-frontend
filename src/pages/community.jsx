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
import CreateIcon from '@material-ui/icons/Create';

import PostPageImage from "../resource/images/postPageImage.jpg";

function community() {
  return (
    <MainLayout
      imagePath={PostPageImage}
      title={"게시글 전체 결과"}
      detail="현재까지 올라온 모든 게시글입니다."
    >
      <div className="container" style={{marginTop: "100px", marginBottom: "100px", }}>
        <div className='flex-horiz flex-space-between' style={{marginBottom: "20px"}}>
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
          <button className='write-btn' style={{background: "none"}}>
            <span className='input-size'>글쓰기</span>
            <CreateIcon />
          </button>

        </div>

        <PostPreviewComponent
          className="detail"
          title={"작성한 타이틀"}
          detail={
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolort, sed do eiusmod tempor incididunt ut labore et dolort, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex'
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
        <PostPreviewComponent
          className="detail"
          title={"작성한 타이틀"}
          detail={
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolort, sed do eiusmod tempor incididunt ut labore et dolort, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex'
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
        <PostPreviewComponent
          className="detail"
          title={"작성한 타이틀"}
          detail={
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolort, sed do eiusmod tempor incididunt ut labore et dolort, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex'
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
        <PostPreviewComponent
          className="detail"
          title={"작성한 타이틀"}
          detail={
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolort, sed do eiusmod tempor incididunt ut labore et dolort, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex'
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
