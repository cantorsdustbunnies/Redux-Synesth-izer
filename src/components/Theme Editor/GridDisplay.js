import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const ListItem = styled.div`
	position: absolute;
	width: 120px;
	height: 120px;
	font-size: 80px;
	border: 1px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #232323a2;
	color: #ffddaa;
	margin: 20px;
`;

const ListItemWrapper = styled.div`
	width: 120px;
	height: 120px;
	margin: 20px;
	position: relative;
`;
const Wrapper = styled.div`
	width: 100vw;
	height: calc(100vh - 56px);
	background-color: lightblue;
	display: flex;
`;

const ListWrapper = styled.div`
	width: 50%;
	height: 100%;
	background-color: #235353a2;
	display: flex;
	flex-wrap: wrap;
	overflow-y: scroll;
`;

export default class GridDisplay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listItems: [],
		};
	}

	componentWillMount() {
		this.setState({
			listItems: this.fakeList(36),
		});
	}

	fakeList = n => {
		let result = [];
		for (let i = 0; i < n; i++) {
			result.push(
				<ListItemWrapper key={`fake-${i}`}>
					<ListItem id={`fake-${i}`} onClick={this.triggerAnimation}>
						{i}
					</ListItem>
				</ListItemWrapper>
			);
		}
		return result;
	};

	getDimension = id => {
		const el = document.getElementById(id);
		const bBox = el.getBoundingClientRect();
		return bBox;
	};

	triggerAnimation = e => {
		e.target.style.left = '800px';
	};

	render() {
		return (
			<Wrapper>
				<ListWrapper>{this.state.listItems}</ListWrapper>
			</Wrapper>
		);
	}
}
