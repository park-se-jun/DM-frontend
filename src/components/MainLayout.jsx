import { Box, Typography } from "@material-ui/core";
import React from "react";
import Header from "./Header";

function MainLayout({ imagePath, title, detail, children }) {
  return (
    <>
      <Header />
      {imagePath && (
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
            style={{  fontSize: "36px", fontWeight: 700 }}
          >
            {title}
          </Typography>
          <Typography
            style={{  fontSize: "20px", fontWeight: 400 }}
          >
            {detail}
          </Typography>
          </div>
          
        </Box>
      )}
      {!imagePath&&(<Box style={{width:"100vw"}}/>)

      }
      <Box
        className="mt-3"
        style={{
          minHeight: "70vh",
        }}
      >
        {children}
      </Box>
    </>
  );
}

export default MainLayout;
