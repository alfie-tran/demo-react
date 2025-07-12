//class component
//function component
//DRY: don't repeat yourself - đừng lặp lại chính mình

import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';
class MyComponent extends React.Component {
	state = {
		listUsers: [
			{ id: 1, name: 'Hoi dan IT', age: '30' },
			{ id: 2, name: 'Alfie', age: '25' },
			{ id: 3, name: 'Nancy', age: '23' },
		],
	};
	render() {
		return (
			<div>
				<UserInfor />
				<br />
				<br />
				<DisplayInfor listUsers={this.state.listUsers} />
			</div>
		);
	}
}

export default MyComponent;
