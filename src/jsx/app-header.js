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

//			{/*onClick={handleClick}*/}
//			onTitleTouchTap={handleTouchTap}
const AppHeader = () =>
	<header>
		<AppBar
			title="アプリのヘッダ・タイトル"
			iconClassNameRight="muidocs-icon-navigation-expand-more"
			onLeftIconButtonTouchTap={handleTouchTap}
		/>
	</header>;

export default AppHeader;
