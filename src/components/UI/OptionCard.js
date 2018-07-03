import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
	width: 280px;
	margin: 0 auto;
	min-height: 100px;
	box-sizing: border-box;
	padding: 0 20px;
`;

const Title = styled.div`
	font-family: Amiri;
	font-weight: 400;
	color: #f1f1f1;
	margin-top: 20px;
	font-size: 16px;
`;

const CardBody = styled.div`
	width: 100%;
	height: 100%;
`;

export default ({ title = 'Background Color', children }) => {
	return (
		<Card>
			<Title>{title}:</Title>
			<CardBody>{children}</CardBody>
		</Card>
	);
};
