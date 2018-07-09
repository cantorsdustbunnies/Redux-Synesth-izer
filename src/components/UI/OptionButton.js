//==========================//
//       TODO               //
//--------------------------//
// Figure out an animation that
// looks nice enough for transitions

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background-color: #6432a6;
	border: none;
	margin: 2px;
	outline: none;
	color: #ddd9ef;
	width: 100%;
	height: 30px;
	padding: 0 20px;
	cursor: pointer;
	transition: all 450ms;

	:hover {
		background-color: #8141d5;
		color: white;
	}
`;

export default ({ onClick, children }) => {
	return <Button onClick={onClick}>{children}</Button>;
};
