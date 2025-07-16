//class component
//function component
//DRY: don't repeat yourself - đừng lặp lại chính mình

import React from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';
class MyComponent extends React.Component {
	state = {
		listUsers: [
			{ id: 1, name: 'Hoi dan IT', age: '30' },
			{ id: 2, name: 'Alfie', age: '25' },
			{ id: 3, name: 'Nancy', age: '18' },
		],
	};

	handleAddNewUser = (userObj) => {
		console.log('>>>Check data from parent: ', userObj);
		this.setState({
			listUsers: [userObj, ...this.state.listUsers],
		});
	};

	render() {
		return (
			<div>
				<AddUserInfor handleAddNewUser={this.handleAddNewUser} />
				<br />
				<br />
				<DisplayInfor listUsers={this.state.listUsers} />
			</div>
		);
	}
}

export default MyComponent;
