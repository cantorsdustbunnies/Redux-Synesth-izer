import React, { Component } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${props => props.color};
`;

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: this.props.open,
			gotNew: 'no',
		};
	}

	componentWillReceiveProps(newProps) {
		console.log(newProps);
		this.setState({
			open: newProps.open,
			gotNew: 'yes',
		});
	}

	render() {
		let openState = this.state.open;
		return <Wrapper> {this.state.gotNew}</Wrapper>;
	}
}

export default Main;
