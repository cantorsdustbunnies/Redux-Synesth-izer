import React, { Component } from 'react';

import BackgroundColorPicker from '../containers/BackgroundColorPicker';
import BackgroundToggle from '../containers/BackgroundToggle';
import Divider from '../components/UI/Divider';
import Editor from './Editor';
import GraphemeGrid from '../containers/GraphemeGrid';
import Header from './UI/Header';
import Intro from './Intro';
import Main from './Main';
import OptionButton from './UI/OptionButton';
import OptionCard from './UI/OptionCard';
import Drawer from './UI/Drawer';
import ThemeSelector from '../containers/ThemeSelector';
import ThemeEditor from '../containers/ThemeEditor';

const HEADER_HEIGHT = 56;
const SIDEBAR_WIDTH = 300;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editorOpen: false,
			title: 'Synes-thizer',
			sideBarVisible: true,
		};
		this.onNewTheme = this.onNewTheme.bind(this);
		this.onEditTheme = this.onEditTheme.bind(this);
		this.onCancelEdit = this.onCancelEdit.bind(this);
	}

	onCancelEdit() {
		this.setState({
			editorOpen: false,
			title: 'Synes-thizer',
			sideBarVisible: true,
		});
	}

	onNewTheme() {
		this.setState({
			editorOpen: true,
			title: 'Theme Editor',
			sideBarVisible: false,
		});
	}

	onEditTheme() {
		this.setState({
			editorOpen: true,
			title: 'Theme Editor',
			sideBarVisible: false,
		});
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
					open={this.state.sideBarVisible}
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
				<Main>
					<div>
						<h1> Hello </h1>
					</div>
				</Main>
			</React.Fragment>
		);
	}
}

export default App;
