'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import AppBar from 'material-ui/AppBar';

function handleTouchTap() {
	alert('onTouchTap triggered on the title component');
}
function handleClick() {
	alert('onClick triggered on the title component');
}

const AppHeader = () =>
	<header>
		<AppBar
			title="アプリのヘッダ・タイトル"
			onTitleTouchTap={handleTouchTap}
			onClick={handleClick}
			iconClassNameRight="muidocs-icon-navigation-expand-more"
		/>
	</header>;

export default AppHeader;
