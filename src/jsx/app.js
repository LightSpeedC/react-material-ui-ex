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
//import AppHeader from './app-header';
import AppBar from 'material-ui/AppBar';

const handleClick = e => alert('ok1');

//<AppHeader />
const App = props =>
	<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
		<AppBar
			title="Xアプリのヘッダ・タイトル"
			iconClassNameRight="muidocs-icon-navigation-expand-more"
			onLeftIconButtonTouchTap={handleClick}
		/>
		<p>test p</p>
		<RaisedButton label="デフォルト" />
	</MuiThemeProvider>;

//const App = props =>
//	<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
//		<MyAwesomeReactComponent />
//	</MuiThemeProvider>;

ReactDOM.render(<App />, document.getElementById('app'));
