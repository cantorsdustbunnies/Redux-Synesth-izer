import React from 'react';
import styled from 'styled-components';

const CheckBoxWrapper = styled.div`
	width: 25px;
	height: 25px;
	background-color: ${props => (props.checked ? '#8141d5a2' : 'inherit')};
	display: flex;
	justify-content: center;
	align-items: center;
	border: ${props => (props.checked ? 'inherit' : '1px solid #1a5b65')};
	font-weight: 800;
	line-height: 100%;
	box-sizing: border-box;
	transition: 450ms all;
	cursor: pointer;
	:hover {
		border: 1px solid ${props => (props.checked ? '#ffffffa2' : '#8141df')};
	}
`;

const Box = styled.div`
	width: 15px;
	height: 15px;
	color: #ffffffa2;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default ({ checked, onClick }) => {
	return (
		<CheckBoxWrapper checked={checked} onClick={onClick}>
			<Box checked={checked}>{checked ? String.fromCharCode(10004) : ''}</Box>
		</CheckBoxWrapper>
	);
};
