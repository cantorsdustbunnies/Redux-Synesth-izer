import React, { Component } from 'react';
import styled from 'styled-components';
import ThemeEditor from '../containers/ThemeEditor';

const Wrapper = styled.div`
	position: absolute;
	width: 100vw;
	height: calc(100vh - ${props => props.headerHeight}px);
	background-color: white;
	margin-left: ${props => props.padding};
	transition: all ease-in-out 450ms;
`;

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.getPadding = this.getPadding.bind(this);
		this.renderPage = this.renderPage.bind(this);
	}

	getPadding() {
		const { drawerOpen } = this.props;
		if (drawerOpen) {
			return '300px';
		} else return '0px';
	}

	renderPage() {
		if (this.props.editorOpen) {
			return <ThemeEditor isNew={this.props.isNew} />;
		} else {
			return <div> The Editor Isn't Open </div>;
		}
	}

	render() {
		console.log('main thinks isNew is', this.props.isNew);
		return (
			<Wrapper
				drawerOpen={this.props.drawerOpen}
				headerHeight={this.props.headerHeight}
				padding={this.getPadding()}
			>
				{this.renderPage()}
			</Wrapper>
		);
	}
}

// width: calc(100vw - ${props => (props.drawerOpen ? '300px' : '0px')});
