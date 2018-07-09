import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: absolute;
	width: 100px;
	height: 100px;
	background-color: red;
`;

export default class Main extends Component {
	render() {
		return <Wrapper />;
	}
}
