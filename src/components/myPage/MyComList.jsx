import React from "react";

import MyComComponent from	"./MyCommentComponent";

function MyComList() {

	return (
		<div className="flex-horiz" style={{width: "fit-content", justifyContent: "center"}}>
			<div className='my-list flex-horiz'>
					<MyComComponent 
						comment={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...'}
						date={"오늘"}
					/>
					<MyComComponent 
						comment={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...'}
						date={"오늘"}
					/>
					<MyComComponent 
						comment={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...'}
						date={"오늘"}
					/>
			</div>
		</div>
		
	);
}

export default MyComList;