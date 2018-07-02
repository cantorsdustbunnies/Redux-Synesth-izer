import React, { Component } from 'react';

import Main from './Main';
import Header from './UI/Header';
import SideBar from './UI/Sidebar';
import OptionCard from './UI/OptionCard';
import ThemeSelector from '../containers/ThemeSelector';
const HEADER_HEIGHT = 56;
const SIDEBAR_WIDTH = 300;

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header height={HEADER_HEIGHT} />
				<SideBar width={SIDEBAR_WIDTH} headerHeight={HEADER_HEIGHT}>
					<OptionCard title="Current Theme">
						<ThemeSelector />
					</OptionCard>
					<OptionCard title="Graphemes" />
					<OptionCard title="Allow app to change the background color on pages I visit" />
					<OptionCard title="Background Color" />
				</SideBar>
				<Main headerHeight={HEADER_HEIGHT} sideBarWidth={SIDEBAR_WIDTH} />
			</React.Fragment>
		);
	}
}
