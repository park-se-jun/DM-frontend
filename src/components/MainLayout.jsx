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
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url("${imagePath}")`,
            overflow: "hidden",
            width: "100%",
            height: "30vh",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            style={{ marginLeft: "10vw", fontSize: "36px", fontWeight: 700 }}
          >
            {title}
          </Typography>
          <Typography
            style={{ marginLeft: "10vw", fontSize: "20px", fontWeight: 400 }}
          >
            {detail}
          </Typography>
        </Box>
      )}
      <Box className="pt-3">{children}</Box>
    </>
  );
}

export default MainLayout;