import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveToChromeStorage, initFromChromeStorage } from '../actions';

const Selector = styled.select`
	width: 100%;
	height: 35px;
	color: #ddd9ef;
	background-color: #1a5b65;
	outline: none;
	border: none;
	padding-left: 10px;
	margin-bottom: 20px;
`;

const Option = styled.option`
	background-color: inherit;
	font-size: 1em;
`;

class ThemeSelector extends Component {
	constructor(props) {
		super(props);
		this.onThemeChange = this.onThemeChange.bind(this);
	}

	componentWillMount() {
		this.props.initFromChromeStorage();
	}

	onThemeChange(e) {
		const { default_themes, user_themes, selected_theme, saveToChromeStorage } = this.props;
		if (default_themes && user_themes && selected_theme) {
			const themes = [...default_themes, ...user_themes];
			for (let theme of themes) {
				if (theme.name === e.target.value) {
					saveToChromeStorage('selected_theme', theme);
				}
			}
		}
	}

	renderOptions() {
		const { default_themes, user_themes, selected_theme } = this.props;
		if (default_themes && user_themes && selected_theme) {
			const themes = [...default_themes, ...user_themes];
			return themes.map(theme => (
				<Option id={theme.name} key={theme.name}>
					{theme.name}
				</Option>
			));
		}
	}

	render() {
		return (
			<Selector
				onChange={this.onThemeChange}
				value={this.props.selected_theme ? this.props.selected_theme.name : ''}
			>
				{this.renderOptions()}
			</Selector>
		);
	}
}

const mapStateToProps = state => {
	const { chrome } = state;
	const { default_themes, selected_theme, user_themes } = chrome;
	return { default_themes, selected_theme, user_themes };
};

const mapDispatchToProps = dispatch => bindActionCreators({ saveToChromeStorage, initFromChromeStorage }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ThemeSelector);
