import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
	width: 280px;
	margin: 0 auto;
	min-height: 200px;
	box-sizing: border-box;
`;

const Title = styled.div`
	font-family: Amiri;
	font-weight: 400;
	color: #f1f1f1;
	margin-top: 20px;
	font-size: 16px;
`;

export default ({ title = 'Background Color', children }) => {
	return (
		<Card>
			<Title>{title}:</Title>
			{children}
		</Card>
	);
};
