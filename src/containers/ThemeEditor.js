import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';

const SplashWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #23236354;
`;

const expand = keyframes`
	from { 
		width: 0%; 
		height: 15px;
		transform: translateX(50%);  
		border-radius: 0; 
	}

	to {
		width: 100%; 
		height: 15px; 
		border-radius: 0; 
	}

`;

const Splash = styled.div`
	border-radius: 50%;
	width: 0px;
	height: 0px;
	background-color: black;
	position: absolute;
	z-index: -1;
	animation: ${expand} 1s ease-in-out forwards;
`;

class ThemeEditor extends Component {
	render() {
		return (
			<SplashWrapper>
				<Splash />
			</SplashWrapper>
		);
	}
}

const mapStateToProps = state => {
	const { selected_theme, default_themes, user_themes } = state.chrome;
	return { selected_theme, default_themes, user_themes };
};

export default connect(
	mapStateToProps,
	null
)(ThemeEditor);
