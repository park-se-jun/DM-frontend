import React from "react";
import { Link } from 'react-router-dom';

function MyComComponent({comment, date}) {

	return (
		<div className='post-item'>
			<Link to={"#"}>
				<p className='detail'>{comment}</p>
				<span className='text-gray '>{date}</span>
			</Link>
		</div>
	);
}

export default MyComComponent;