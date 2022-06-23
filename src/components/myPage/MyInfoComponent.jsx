import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { defaults } from 'underscore';
import Input from "react-validation/build/input";


function MyInfoComponent({userName, userEmail, userID}) {
	return (
		<div className="flex-verti">
			<ul className='personal-info-wrap'>
				<li><strong className='text-bold title-size'>개인정보</strong></li>
				<li className='flex-horiz'>
					<span className='text'><strong>*</strong>&nbsp;&nbsp;이름</span>
					<input
						id="readonly-input"
						type="text"
						className="form-control input-size input-placeholder-size"
						value={userName}
						disabled
					/>
				</li>
				<li className='flex-horiz'>
					<span className='text'><strong>*</strong>&nbsp;&nbsp;이메일</span>
					<input
						id="readonly-input"
						type="text"
						className="form-control input-size input-placeholder-size"
						value={userEmail}
						disabled
					/>
				</li>
			</ul>

			<ul className='additional-info-wrap'>
				<li><strong className='text-bold title-size'>추가정보</strong></li>
				<li className='flex-horiz'>
					<span className='text'><strong>*</strong>&nbsp;&nbsp;아이디</span>
					<input
						id="readonly-input"
						type="text"
						className="form-control input-size input-placeholder-size"
						value={userID}
						disabled
					/>
				</li>
				<li></li>
			</ul>
		</div>
	);
}

export default MyInfoComponent;