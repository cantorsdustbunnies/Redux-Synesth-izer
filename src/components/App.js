import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initNewTheme, initSelectedTheme } from '../actions/actions_theme';

import BackgroundColorPicker from '../containers/BackgroundColorPicker';
import BackgroundToggle from '../containers/BackgroundToggle';
import Divider from './UI/Divider';
import GraphemeGrid from '../containers/GraphemeGrid';
import Header from './UI/Header';

import Main from './Main';
import OptionButton from './UI/OptionButton';
import OptionCard from './UI/OptionCard';
import Drawer from './UI/Drawer';
import ThemeSelector from '../containers/ThemeSelector';

const HEADER_HEIGHT = 56;
const SIDEBAR_WIDTH = 300;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editorOpen: true,
			title: 'Synes-thizer',
			drawerOpen: false,
			isNew: false,
		};
		this.onNewTheme = this.onNewTheme.bind(this);
		this.onEditTheme = this.onEditTheme.bind(this);
		this.onCancelEdit = this.onCancelEdit.bind(this);
		this.toggleDrawer = this.toggleDrawer.bind(this);
	}

	onCancelEdit() {
		this.setState({
			editorOpen: false,
			title: 'Synes-thizer',
			isNew: false,
			drawerOpen: true,
		});
	}

	onNewTheme() {
		this.setState({
			editorOpen: true,
			title: 'Theme Editor',
			drawerOpen: false,
			isNew: true,
		});
		this.props.initNewTheme();
	}

	onEditTheme() {
		this.setState({
			editorOpen: true,
			title: 'Theme Editor',
			drawerOpen: false,
			isNew: true,
		});
		this.props.initSelectedTheme();
	}

	renderHeaderButtons() {
		if (!this.state.editorOpen) {
			return (
				<React.Fragment>
					<OptionButton onClick={this.onNewTheme}>New Theme</OptionButton>
				</React.Fragment>
			);
		} else {
			return (
				<React.Fragment>
					<OptionButton onClick={this.onCancelEdit}>Cancel</OptionButton>
					<OptionButton onClick={this.saveTheme}>Save Theme</OptionButton>
				</React.Fragment>
			);
		}
	}
	renderEditButton() {
		if (this.state.editorOpen) {
			return null;
		} else {
			return <OptionButton onClick={this.onEditTheme}>Edit This Theme</OptionButton>;
		}
	}

	toggleDrawer() {
		this.setState({
			drawerOpen: !this.state.drawerOpen,
		});
	}

	render() {
		return (
			<React.Fragment>
				<Header title={this.state.title} height={HEADER_HEIGHT}>
					{this.renderHeaderButtons()}
				</Header>
				<Drawer
					width={SIDEBAR_WIDTH}
					headerHeight={HEADER_HEIGHT}
					title={'Options'}
					open={this.state.drawerOpen}
					toggleDrawer={this.toggleDrawer}
				>
					<OptionCard title="Current Theme">
						<ThemeSelector />
						{this.renderEditButton()}
					</OptionCard>

					<OptionCard title="Graphemes">
						<GraphemeGrid active={this.state.editorOpen} />
					</OptionCard>
					<Divider />

					<OptionCard title="Allow Synes-thizer to change the background color on pages I visit">
						<BackgroundToggle />
					</OptionCard>

					<BackgroundColorPicker />
				</Drawer>
				<Main
					editorOpen={this.state.editorOpen}
					drawerOpen={this.state.drawerOpen}
					headerHeight={HEADER_HEIGHT}
					sidebarWidth={SIDEBAR_WIDTH}
					isNew={this.state.isNew}
				/>
			</React.Fragment>
		);
	}
}
const mapDispatchToProps = dispatch => bindActionCreators({ initNewTheme, initSelectedTheme }, dispatch);

export default connect(
	null,
	mapDispatchToProps
)(App);
