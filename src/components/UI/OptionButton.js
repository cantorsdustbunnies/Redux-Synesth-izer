//==========================//
//       TODO               //
//--------------------------//
// Figure out an animation that
// looks nice enough for transitions

import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background-color: #8141d5a2;
    border: none; 
    margin: 2px; 
    outline: none; 
    color: #ffffffa2
    width: 100%;  
	height: 30px; 
	padding: 0 20px;
    transition: all 450ms;
 
	:hover {
		background-color: #8141d5;
		color: white;
    }

`;

export default class OptionButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <Button onClick={this.props.onClick}>{this.props.children}</Button>;
	}
}
