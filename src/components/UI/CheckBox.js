import React, { Component } from 'react';
import styled from 'styled-components';

const CheckBoxWrapper = styled.div`
	width: 25px;
	height: 25px;
	background-color: ${props => (props.checked ? '#8141df' : '#ffffffa2')};
	display: flex;
	justify-content: center;
	align-items: center;
	border: 3px solid #8141df;
	font-weight: 800;
	line-height: 100%;
	color: white;
	box-sizing: border-box;
	transition: 450ms all;
	border-radius: 2px;
	:hover {
		background-color: #8141df;
		border: 3px solid #ffffffa2;
	}
`;

export default ({ checked, onClick }) => {
	return (
		<CheckBoxWrapper checked={checked} onClick={onClick}>
			{checked ? String.fromCharCode(10004) : ''}
		</CheckBoxWrapper>
	);
};
