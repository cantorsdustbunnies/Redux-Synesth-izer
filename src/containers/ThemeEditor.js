import React, { Component } from 'react';
import styled from 'styled-components';
import GridDisplay from '../components/Theme Editor/GridDisplay__broken';

export default class ThemeEditor extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <GridDisplay isNew={this.props.isNew} />;
	}
}
