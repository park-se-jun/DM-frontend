import React from "react";
import CommentIcon from '@material-ui/icons/Comment';
function PostPreviewComponent({title, detail, comment, symtomArray ,author, commentNumber,date}) {
  const symtomTags = symtomArray.map((item, index) =>
    index <= 4 ? <span className="symtom-tag">#{item.name}</span> : <></>
  );
  return (
    <div className="mt-5 border-bottom pb-4" role="button">
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
    </div>
  );
}

export default PostPreviewComponent;
