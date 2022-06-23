import React from "react";
import CommentIcon from '@material-ui/icons/Comment';
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
function PostPreviewComponent({title, detail, id, comment, symtomArray ,author, commentNumber,date}) {
  const symtomTags = symtomArray.map((item, index) =>
    index <= 4 ? <span className="symtom-tag">#{item.name}&nbsp;&nbsp;&nbsp;&nbsp;</span> : <></>
  );
  return (
    <Box className="border-bottom" component={Link} to={`community/:${id}`} style={{ textDecoration: 'none' ,color:"#000", display:"flex",flexDirection:"column",padding: "2rem 0.5rem"}}>
      <div style={{ display: "flex" ,justifyContent:"space-between", marginBottom: "10px"}}>
        <span className="title text-bold">
          <h5>{title}</h5>
        </span>
        <span style={{color: "#588D23"}}>{symtomTags}</span>
      </div>
        <p className='detail' style={{textAlign:"start"}}>{detail}</p>
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
    </Box>
  );
}

export default PostPreviewComponent;
