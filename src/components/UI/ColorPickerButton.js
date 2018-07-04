import React, { Component } from 'react';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';

const SwatchWrapper = styled.div`
	width: 100%;
	height: 35px;
	background-color: inherit;
	border: 1px solid #ffffffa2;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 1px;
	margin-top: 10px;
	transition: 450ms all;
	:hover {
		border: 1px solid #8141d5;
	}
`;

const Swatch = styled.div`
	background-color: ${props => props.color || 'white'};
	width: 100%;
	height: 19px;
	margin: 8px;
	border-radius: 2px;
`;

const Overlay = styled.div`
	position: fixed;
	bottom: 0px;
	top: 0px;
	left: 0px;
	right: 0px;
	z-index: 2;
`;

const PickerWrapper = styled.div`
	position: relative;
	z-index: 3;
	transform: translate(240px, calc(-35px - 135px));
	margin: 10px;
`;

export default class ColorPickerButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayColorPicker: false,
		};
	}

	handleClick = () => {
		this.setState({ displayColorPicker: !this.state.displayColorPicker });
	};

	handleClose = () => {
		this.setState({ displayColorPicker: false });
	};

	convertColorToRGBA = colorObj => {
		return `rgba(${colorObj.r}, ${colorObj.g}, ${colorObj.b}, ${colorObj.a})`;
	};

	renderPicker() {
		if (this.state.displayColorPicker) {
			return (
				<React.Fragment>
					<Overlay onClick={this.handleClose} />
					<PickerWrapper>
						<ChromePicker color={this.props.color} onChange={this.props.handleChange} />
					</PickerWrapper>
				</React.Fragment>
			);
		} else {
			return null;
		}
	}

	render() {
		return (
			<React.Fragment>
				<SwatchWrapper>
					<Swatch color={this.convertColorToRGBA(this.props.color)} onClick={this.handleClick} />
				</SwatchWrapper>
				{this.renderPicker()}
			</React.Fragment>
		);
	}
}
