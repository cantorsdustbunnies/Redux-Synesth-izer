import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initNewTheme, initSelectedTheme } from '../../actions/actions_theme';

class GridDisplay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			target: null,
			selected: null,
			selectedDim: null,
			selectedId: null,
		};
	}

	componentDidMount() {
		this.setState({
			target: this.getDimensions('Target'),
		});
	}

	triggerAnimation = e => {
		if (this.state.selectedId) {
			const current = document.getElementById(this.state.selectedId);
			current.style.animation = `${this.makeAnimation(
				this.state.selectedId,
				this.state.selectedDim
			)} 450ms ease-in-out forwards`;
		}
		const el = document.getElementById(e.target.id);
		el.style.animation = `${this.makeAnimation(e.target.id)} 1s ease-in-out forwards`;
		this.setState({
			selectedDim: this.getDimensions(e.target.id),
			selectedId: e.target.id,
		});
	};

	makeAnimation(sourceId, targetPos = this.state.target) {
		const pos = this.getDimensions(sourceId);

		return keyframes`
			from {
				top: ${pos.top}px;
				left: ${pos.left}px;
				width: ${pos.width}px;
				height: ${pos.height}px;
				
			}
			to {
				top: ${targetPos.top}px;
				left: ${targetPos.left}px;
				width: ${targetPos.width}px;
				height: ${targetPos.height}px;
			
			}
		`;
	}

	fakeGridItems = n => {
		let items = [];
		for (let i = 0; i < n; i++) {
			items.push(i);
		}
		return items.map(item => {
			return (
				<GridItemContainer onClick={this.triggerAnimation} key={`fake-${item}`}>
					<GridItem id={`fake-${item}`}>{item}</GridItem>
				</GridItemContainer>
			);
		});
	};

	getDimensions = id => {
		const el = document.getElementById(id);
		const bBox = el.getBoundingClientRect();
		return bBox;
	};

	render() {
		console.log(this.state);
		return (
			<Wrapper>
				<TargetWrapper>
					<TargetContainer>
						<Target id="Target" />
					</TargetContainer>
				</TargetWrapper>
				<GridWrapper>{this.fakeGridItems(36)}</GridWrapper>
			</Wrapper>
		);
	}
}

const mapStateToProps = state => {
	return state.theme;
};

const mapDispatchToProps = dispatch => bindActionCreators({ initNewTheme, initSelectedTheme }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GridDisplay);

const Wrapper = styled.div`
	width: 100vw;
	height: calc(100vh - 56px);
	background-color: #224466;
`;

const GridWrapper = styled.div`
	width: 50%;
	height: 100%;
	background-color: #2253a2;
	display: flex;
	justify-content: center;
	position: absolute;
	right: 0;
	flex-wrap: wrap;
	overflow-y: auto;
`;

const GridItemContainer = styled.div`
	width: 120px;
	height: 120px;
	margin: 30px;
	overflow-y: auto;
`;

const GridItem = styled.div`
	width: 120px;
	height: 120px;
	background-color: #43529fa2;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 80px;
	color: ${props => (props.color ? props.color : 'white')};
`;

const TargetContainer = styled.div`
	width: 220px;
	height: 220px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: purple;
`;
const TargetWrapper = styled.div`
	width: 50%;
	height: 100%;
	background-color: #4499a2;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
`;

const Target = styled.div`
	width: 200px;
	height: 200px;
	border: 2px dashed purple;
	background: #ffffffa2;
`;
