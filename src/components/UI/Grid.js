import React, { Component } from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
	min-height: 240px;
	display: grid;
	grid-template-areas: 'a a a a a a';
	gird-auto-rows: auto;
	background-color: inherit;
	pointer-events: ${props => (props.active ? 'auto' : 'none')};
`;

const GridItem = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	color: ${props => (props.color ? props.color : 'gray')};
	margin: 0;
	font-size: 16px;
	padding: 0;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	border-radius: 50%;
	transition: 450ms all;
	background-color: ${props => (props.selected ? 'white' : 'inherit')};
	:hover {
		transform: scale(2);
		background-color: ${props => (props.selected ? '#ffffff' : '#ffffff4a')};
	}
	:active {
		background-color: white;
	}
`;

export default class Grid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: null,
			gridItems: [],
		};
		this.selectGridItem = this.selectGridItem.bind(this);
	}

	componentDidMount() {
		if (this.props.items) {
			this.setState({
				gridItems: this.props.items,
			});
		}
	}

	componentWillReceiveProps(newProps) {
		if (newProps.items) {
			this.setState({
				gridItems: newProps.items,
			});
		}
	}

	selectGridItem(e) {
		this.setState({
			selected: e.target.id,
		});
	}

	getColor(item) {
		if (this.props.theme) {
			const { data } = this.props.theme;
			return this.colorToRGBA(data[item]);
		}
	}

	colorToRGBA(colorObj) {
		return `rgba(${colorObj.r},${colorObj.g},${colorObj.b},${colorObj.a})`;
	}

	addGridItem() {}

	renderGridItems() {
		const { gridItems } = this.state;
		return gridItems.map(item => {
			if (item.match(/[a-z]/)) {
				return (
					<GridItem
						selected={item === this.state.selected ? true : false}
						color={this.getColor(item)}
						onClick={this.selectGridItem}
						key={item}
						id={item}
					>
						{item.toUpperCase()}
						{item}
					</GridItem>
				);
			}
			return (
				<GridItem
					onClick={this.selectGridItem}
					color={this.getColor(item)}
					selected={item === this.state.selected ? true : false}
					key={item}
					id={item}
				>
					{item}
				</GridItem>
			);
		});
	}
	render() {
		return <GridWrapper active={this.props.active}>{this.renderGridItems()}</GridWrapper>;
	}
}
