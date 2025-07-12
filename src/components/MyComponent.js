//class component
//function component

import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';
class MyComponent extends React.Component {
	render() {
		return (
			<div>
				<UserInfor />
				<br />
				<br />
				<DisplayInfor name="Hoi Dan IT" age="30" />
			</div>
		);
	}
}

export default MyComponent;
