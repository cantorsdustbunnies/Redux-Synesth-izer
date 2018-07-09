import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveToChromeStorage, initFromChromeStorage } from '../actions';

import OptionCard from '../components/UI/OptionCard';
import ColorPickerButton from '../components/UI/ColorPickerButton';
import Divider from '../components/UI/Divider';

class BackgroundColorPicker extends Component {
	constructor(props) {
		super(props);
		this.toggleEditable = this.toggleEditable.bind(this);
	}

	componentWillMount() {
		this.props.initFromChromeStorage();
	}

	handleChange = color => {
		this.props.saveToChromeStorage('background_color', color.rgb);
	};

	toggleEditable() {
		const { allow_background_edit, saveToChromeStorage } = this.props;
		saveToChromeStorage('allow_background_edit', !allow_background_edit);
	}

	render() {
		return (
			<React.Fragment>
				<Divider />
				<OptionCard active={this.props.allow_background_edit} title="Background Color">
					<ColorPickerButton
						color={this.props.background_color || { r: 255, g: 255, b: 255, a: 1 }}
						handleChange={this.handleChange}
					/>
				</OptionCard>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	const { allow_background_edit, background_color } = state.chrome;
	return { allow_background_edit, background_color };
};

const mapDispatchToProps = dispatch => bindActionCreators({ initFromChromeStorage, saveToChromeStorage }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BackgroundColorPicker);
