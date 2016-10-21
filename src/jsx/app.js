'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
require('react-tap-event-plugin')();

import RaisedButton from 'material-ui/RaisedButton';
import AppHeader from './app-header';

const MyAwesomeReactComponent = props =>
	<div>
		<AppHeader />
		<p>test p</p>
		<RaisedButton label="デフォルト" />
	</div>;

const App = props =>
	<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
		<MyAwesomeReactComponent />
	</MuiThemeProvider>;

ReactDOM.render(<App />, document.getElementById('app'));
