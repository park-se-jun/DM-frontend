import React from "react";

import MyPostComponent from	"./MyPostComponent";

function MyPostList() {

	return (
		<div className="flex-horiz" style={{width: "fit-content", justifyContent: "center"}}>
			<div className='my-list flex-horiz'>
				<MyPostComponent 
					title={"title"}
					symptoms={[
						{ name: "두통", value: "5" },
						{ name: "복통", value: "5" },
						{ name: "인후통", value: "5" }
					]}
					desc={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...'}
					comment={21}
					date={"오늘"}
				/>
					<MyPostComponent 
					title={"title"}
					symptoms={[
						{ name: "두통", value: "5" },
						{ name: "복통", value: "5" },
						{ name: "인후통", value: "5" }
					]}
					desc={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...'}
					comment={21}
					date={"오늘"}
				/>
					<MyPostComponent 
					title={"title"}
					symptoms={[
						{ name: "두통", value: "5" },
						{ name: "복통", value: "5" },
						{ name: "인후통", value: "5" }
					]}
					desc={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...'}
					comment={21}
					date={"오늘"}
				/>
			</div>
		</div>
		
	);
}

export default MyPostList;