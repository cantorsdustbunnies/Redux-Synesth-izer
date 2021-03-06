import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveToChromeStorage, initFromChromeStorage } from '../actions';

import Grid from '../components/UI/Grid';

class GraphemeGrid extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.props.initFromChromeStorage();
	}

	renderGrid() {
		return (
			<Grid
				large={this.props.large}
				active={this.props.active}
				theme={this.props.selected_theme}
				items={this.props.default_graphemes}
			/>
		);
	}

	render() {
		return this.renderGrid();
	}
}

const mapStateToProps = state => {
	const { default_graphemes, user_graphemes, selected_theme } = state.chrome;
	return { default_graphemes, user_graphemes, selected_theme };
};

const mapDispatchToProps = dispatch => bindActionCreators({ initFromChromeStorage, saveToChromeStorage }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GraphemeGrid);
