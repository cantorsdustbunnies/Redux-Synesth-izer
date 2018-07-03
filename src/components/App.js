import React, { Component } from 'react';
import styled from 'styled-components';
import Editor from './Editor';
import GraphemeGrid from '../containers/GraphemeGrid';
import Header from './UI/Header';
import Intro from './Intro';
import Main from './Main';
import OptionButton from './UI/OptionButton';
import OptionCard from './UI/OptionCard';
import SideBar from './UI/Sidebar';
import ThemeSelector from '../containers/ThemeSelector';
const HEADER_HEIGHT = 56;
const SIDEBAR_WIDTH = 300;

const NewThemeBtn = styled.button`
	background-color: pink;
`;

const EditThemeBtn = styled.button`
	background-color: pink;
`;

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editorOpen: false,
		};
		this.onNewTheme = this.onNewTheme.bind(this);
		this.onEditTheme = this.onEditTheme.bind(this);
		this.onCancelEdit = this.onCancelEdit.bind(this);
	}

	onCancelEdit() {
		this.setState({
			editorOpen: false,
		});
	}

	onNewTheme() {
		this.setState({
			editorOpen: true,
		});
	}

	onEditTheme() {
		this.setState({
			editorOpen: true,
		});
	}

	renderMain() {
		return this.state.editorOpen ? <Editor /> : <Intro />;
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
				<Header height={HEADER_HEIGHT}>{this.renderHeaderButtons()}</Header>
				<SideBar width={SIDEBAR_WIDTH} headerHeight={HEADER_HEIGHT}>
					<OptionCard title="Current Theme">
						<ThemeSelector />
						{this.renderEditButton()}
					</OptionCard>
					<OptionCard title="Graphemes">
						<GraphemeGrid active={this.state.editorOpen} />
					</OptionCard>
					<OptionCard title="Allow app to change the background color on pages I visit" />
					<OptionCard title="Background Color" />
				</SideBar>
				<Main headerHeight={HEADER_HEIGHT} sideBarWidth={SIDEBAR_WIDTH}>
					{this.renderMain()}
				</Main>
			</React.Fragment>
		);
	}
}
