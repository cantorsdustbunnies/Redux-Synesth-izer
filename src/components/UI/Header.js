import React from 'react';
import styled from 'styled-components';

import SLogo from '../../chrome_extension/images/S.png';

const Header = styled.header`
	height: 56px;
	background-color: #232323;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.img`
	width: 40px;
	height: 40px;
	margin: 8px;
`;

const ButtonWrapper = styled.div`
	height: 30px;
	min-width: 200px;
	border: 1px solid white;
	margin: 8px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const TitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 30px;
	align-items: center;
	color: #f4f4f4a2;
	font-family: Roboto;
	min-width: 15%;
`;

export default ({ title = 'Synes-thizer', children, logo = SLogo }) => {
	return (
		<Header>
			<TitleWrapper>
				<Logo src={logo} />
				{title}
			</TitleWrapper>
			<ButtonWrapper>{children}</ButtonWrapper>
		</Header>
	);
};
