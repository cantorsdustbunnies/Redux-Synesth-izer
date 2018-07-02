import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initFromChromeStorage, saveToChromeStorage } from '../actions';
import Sidebar from '../components/UI/Sidebar';

class OptionsEditor extends Component {
	componentWillMount() {
		this.props.initFromChromeStorage();
	}

	render() {
		return <Sidebar />;
	}
}

const mapStateToProps = state => {
	return state.chrome;
};

const mapDispatchToProps = dispatch => bindActionCreators({ initFromChromeStorage, saveToChromeStorage }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OptionsEditor);
