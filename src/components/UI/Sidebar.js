import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
	width: ${props => props.width}px;
	height: calc(100vh - ${props => props.headerHeight}px);
	background-color: #232323;
	position: absolute;
`;

export default ({ children, width, headerHeight }) => {
	return (
		<Sidebar width={width} headerHeight={headerHeight}>
			{children}
		</Sidebar>
	);
};
