import React from "react";
import CommentIcon from '@material-ui/icons/Comment';
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
function PostPreviewComponent({title, detail, id, comment, symtomArray ,author, commentNumber,date}) {
  const symtomTags = symtomArray.map((item, index) =>
    index <= 4 ? <span className="symtom-tag">#{item.name}</span> : <></>
  );
  return (
    <Box className="mt-5 border-bottom p-4" component={Link} to={`community/:${id}`} style={{ textDecoration: 'none' ,color:"#000"}}>
      <div style={{ display: "flex" ,justifyContent:"space-between"}}>
        <span className="title">
          <h5>{title}</h5>
        </span>
        <span style={{color: "#588D23"}}>{symtomTags}</span>
      </div>
        <p style={{textAlign:"start"}}>{detail}</p>
      <div className="post-footer" style={{color:"#A8A8A8", display: "flex" ,justifyContent:"space-between"}}>
        <span>작성자{"  "}| {author} </span>
        <span>게시일: {date} <CommentIcon/>{"  "} {commentNumber}</span>
      </div>
    </Box>
  );
}

export default PostPreviewComponent;
