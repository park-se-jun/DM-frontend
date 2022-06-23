import React from "react";

function MyInfoTapComponent() {
	return (
		<ul className='info-btn-wrap flex-horiz' style={{width: "100%", justifyContent: "center"}}>
			<li className='info-item click'>정보</li>
			<li className='info-item'>게시글</li>
			<li className='info-item'>댓글</li>
		</ul>
	);
}

export default MyInfoTapComponent;