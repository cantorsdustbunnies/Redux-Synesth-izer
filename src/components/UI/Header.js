import React from 'react';
import styled from 'styled-components';

import SLogo from '../../chrome_extension/images/S.png';

const Header = styled.header`
	height: 56px;
	background-color: #000022;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.img`
	width: 35px;
	height: 35px;
	margin-left: 10px;
`;

const ButtonWrapper = styled.div`
	height: 30px;
	width: 300px;
	margin: 8px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	box-sizing: border-box;
`;

const TitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 30px;
	align-items: center;
	color: #f4f4f4a2;
	font-family: Roboto;
	min-width: 15%;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
`;

export default ({ title = 'Synes-thizer', children, logo = SLogo }) => {
	return (
		<Header>
			<Logo src={logo} />
			<TitleWrapper>{title}</TitleWrapper>
			<ButtonWrapper>{children}</ButtonWrapper>
		</Header>
	);
};
