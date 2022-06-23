import React from "react";
import { Link } from 'react-router-dom';
import CommentIcon from '@material-ui/icons/Comment';

function MyPostComponent({title, symptoms, desc, comment, date}) {
	const symtomTags = symptoms.map((item, index) =>
    index <= 4 ? <span className="symptom-tag">#{item.name}&nbsp;&nbsp;&nbsp;&nbsp;</span> : <></>
  );

	return (
		<div className='post-item'>
			<Link to={"#"}>
				<span className='title text-bold'>{title}</span>
				<div className='symptom-list'>{symtomTags}</div>
				<p className='detail'>{desc}</p>
				<div className='sub-post-info flex-horiz flex-space-between'>
					<span>
						<CommentIcon/>&nbsp;
						{comment}
					</span>
					<span className='text-gray '>{date}</span>
				</div>
			</Link>
		</div>
	);
}

export default MyPostComponent;