import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
	position: absolute;
	left: ${props => props.sideBarWidth}px;
	top: ${props => props.headerHeight}px;
	width: calc(100vw - ${props => props.sideBarWidth}px);
	height: calc(100vh - ${props => props.headerHeight}px);
`;

export default ({ children, headerHeight, sideBarWidth }) => {
	return (
		<MainWrapper headerHeight={headerHeight} sideBarWidth={sideBarWidth}>
			{children}
		</MainWrapper>
	);
};
