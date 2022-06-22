import React from "react";
import CommentIcon from '@material-ui/icons/Comment';
function PostPreviewComponent({title, detail, comment, symtomArray ,author, commentNumber,date}) {
  const symtomTags = symtomArray.map((item, index) =>
    index <= 4 ? <span className="symtom-tag">#{item.name}</span> : <></>
  );
  return (
    <div className="btn mt-5 border-bottom p-2" style={{display:"flex",flexDirection:"column" }}>
      <div style={{ display: "flex" ,justifyContent:"space-between"}}>
        <span className="title">
          <h5>{title}</h5>
        </span>
        <span style={{color: "#588D23"}}>{symtomTags}</span>
      </div>
      <div className="post-detail">
        <p>{detail}</p>
      </div>
      <div className="post-footer" style={{color:"#A8A8A8", display: "flex" ,justifyContent:"space-between"}}>
        <span>작성자{"  "}| {author} </span>
        <span>게시일: {date} <CommentIcon/>{"  "} {commentNumber}</span>
      </div>
    </div>
  );
}

export default PostPreviewComponent;
