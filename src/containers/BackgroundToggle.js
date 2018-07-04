import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveToChromeStorage, initFromChromeStorage } from '../actions';

import CheckBox from '../components/UI/CheckBox';

const Wrapper = styled.div`
	position: absolute;
	right: 40px;
	transform: translateY(-25px);
`;

class BackgroundToggle extends Component {
	constructor(props) {
		super(props);
		this.toggleEditable = this.toggleEditable.bind(this);
	}

	componentWillMount() {
		this.props.initFromChromeStorage();
	}

	toggleEditable() {
		const { allow_background_edit, saveToChromeStorage } = this.props;
		saveToChromeStorage('allow_background_edit', !allow_background_edit);
	}

	render() {
		return (
			<Wrapper>
				<CheckBox onClick={this.toggleEditable} checked={this.props.allow_background_edit} />
			</Wrapper>
		);
	}
}

const mapStateToProps = state => {
	const { allow_background_edit } = state.chrome;
	return { allow_background_edit };
};

const mapDispatchToProps = dispatch => bindActionCreators({ initFromChromeStorage, saveToChromeStorage }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BackgroundToggle);
