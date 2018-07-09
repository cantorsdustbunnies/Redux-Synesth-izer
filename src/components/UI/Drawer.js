import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const closeSidebar = keyframes`
	from {
		transform: translateX(0px); 
		box-shadow: none; 
	}
	to {
		transform: translateX(-300px); 
		box-shadow: 0px 3px 5px #23232396;

	}
`;

const openSidebar = keyframes`
	from { 
		transform: translateX(-300px);
		background-color: purple; 
 
	} 
	to {
		transform: translateX(0px);
		box-shadow: none;  
	}
`;

const Sidebar = styled.div`
	width: ${props => props.width}px;
	height: calc(100vh - ${props => props.headerHeight}px);
	background-color: #111129;
	position: absolute;
	transition: all 450ms;
	animation: ${props => props.animation} 450ms ease-in-out forwards;
	cursor: pointer;
	z-index: 2;
`;

const buttonOpen = keyframes`
	0% { 
		top: -56px; 
		left: 300px; 
		width: 56px; 
		color: transparent; 
	}
	50% { 
		top: -56px; 
		left: 0px; 
		width: 300px; 
	}
	100% { 
		top: 0px; 
		left: 0px; 
		width: 300px; 
	}

`;
const buttonClose = keyframes`
	0% {
		top: 0; 
		width: 300px; 
		left: 0px;
		color: transparent;  

	}
	25% { 
		top: 0px; 
		width: 300px;
		opacity: 25%; 
		 
		
	}
	50% { 
		top: 0px; 
		width: 56px;
		left: 0px;
		opacity: 0;   
	}
	51% { 
		top: -56px; 
	}
	100% { 
		width: 56px; 
		left: 300px; 
		top: -56px; 
		opacity: 1; 
	}
`;

const SideBarButton = styled.div`
	
	height: 56px;
	position: relative;  
	background-color: purple;
	animation ${props => (props.open ? buttonOpen : buttonClose)} 900ms ease-in-out forwards; 
	color: lightblue; 
	display: flex; 
	justify-content: center; 
	align-items: center; 
	font-size: 25px; 
	font-family: Roboto; 
	div:first-of-type{
		flex: 1; 
		justify-content: center; 
		align-items: center; 
		padding-left: 20px; 
	}
	div:not(first-of-type){
		padding-right: 20px; 
	}
`;
export default class Drawer extends Component {
	constructor(props) {
		super(props);
		this.getAnimation = this.getAnimation.bind(this);
		this.renderSideBarButton = this.renderSideBarButton.bind(this);
	}

	getAnimation() {
		if (this.props.open) {
			return openSidebar;
		} else {
			return closeSidebar;
		}
	}

	renderSideBarButton() {
		return (
			<SideBarButton open={this.props.open} onClick={this.props.toggleDrawer}>
				{this.props.open ? (
					<React.Fragment>
						<div> Options </div>
						<div> {String.fromCharCode(8612)}</div>
					</React.Fragment>
				) : (
					<div>{String.fromCharCode(9776)}</div>
				)}
			</SideBarButton>
		);
	}

	render() {
		return (
			<React.Fragment>
				<Sidebar width={this.props.width} headerHeight={this.props.headerHeight} animation={this.getAnimation}>
					{this.renderSideBarButton()}
					{this.props.children}
				</Sidebar>
			</React.Fragment>
		);
	}
}
