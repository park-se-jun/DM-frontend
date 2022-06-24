import React from "react";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function PostPreviewComponent({
  title,
  detail,
  id,
  symtomArray,
  author,
  date,
  predict,
  result,
  ...props
}) {
  const symtomTags = symtomArray.map((symptom) => (
    <span key={symptom.symptomid} className="symtom-tag">
      #{symptom.symptomname}&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
  ));
  return (
    <Box
      className="border-bottom"
      style={{
        textDecoration: "none",
        color: "#000",
        display: "flex",
        flexDirection: "column",
        padding: "2rem 0.5rem",
      }}
      {...props}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <span className="title text-bold">
          <h5 className="text-bold">{title}</h5>
        </span>
        <span style={{ color: "#588D23" }}>{symtomTags}</span>
      </div>
      <p className="detail" style={{ textAlign: "start" }}>
        {detail}
      </p>
      <p>
        
        예측되는 질병 : {predict[0]},{predict[1]},{predict[2]}
      </p>
      <p> 진단 결과 : {result}</p>
      <div
        className="post-footer"
        style={{
          color: "#A8A8A8",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span>작성자&nbsp;| &nbsp;&nbsp;{author} </span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{date}</span>
        </div>
      </div>
    </Box>
  );
}

export default PostPreviewComponent;

PostPreviewComponent.defaultProps={
  predict : []
}