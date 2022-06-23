import React from "react";
import CommentIcon from '@material-ui/icons/Comment';
import { Link } from 'react-router-dom';
function PostPreviewComponent({title, detail, comment, symtomArray ,author, commentNumber,date}) {
  const symtomTags = symtomArray.map((item, index) =>
    index <= 4 ? <span className="symtom-tag">#{item.name}&nbsp;&nbsp;&nbsp;&nbsp;</span> : <></>
  );
  return (
    <div className="btn border-bottom" style={{display:"flex",flexDirection:"column",padding: "2rem 0.5rem" }}>
      <Link to={""}>
        <div style={{ display: "flex" ,justifyContent:"space-between", marginBottom: "10px"}}>
          <span className="title">
            <h5 className='text-bold'>{title}</h5>
          </span>
          <span style={{color: "#588D23"}}>{symtomTags}</span>
        </div>
        <div className="post-detail">
          <p className='detail'>{detail}</p>
        </div>
        <div className="post-footer" style={{color:"#A8A8A8", display: "flex" ,justifyContent:"space-between"}}>
          <div>
            <span>작성자&nbsp;| &nbsp;&nbsp;{author} </span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{date}</span>
          </div>
          <div>
            <CommentIcon/>&nbsp;
            {commentNumber}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PostPreviewComponent;
