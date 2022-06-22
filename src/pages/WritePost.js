import { TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import MainLayout from "../components/MainLayout";
import { makeStyles } from "@material-ui/core/styles";
import UserService from "../services/user.service";

const useStyles = makeStyles(() => ({
    write: {
      height: "723px",
      width: "993px"
    }
}));

const WritePost = () => {
  const [content, setContent] = useState("");
  const classes = useStyles();

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
      title={"게시글 작성하기"}
      detail={
        "격고계신 증상과 함께 원하시는 내용을 작성해주세요."
      }
    >   <div style={{marginLeft: 184, marginRight: 183}}>
            <TextField id="title" style={{width: '993px', marginBottom: 63,}} label="제목" variant="outlined"/>
        </div>
        <div style={{marginLeft: 184, marginRight: 183}}>
            <TextField id="write" InputProps={{ classes: { input: classes.write } }} label="내용을 입력해주세요" variant="outlined" />
        </div>
    </MainLayout>
  );
};

export default WritePost;