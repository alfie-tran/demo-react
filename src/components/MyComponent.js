//class component
//function component
//DRY: don't repeat yourself - đừng lặp lại chính mình

import React, { useState } from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

// class MyComponent extends React.Component {
// 	state = {
// 		listUsers: [
// 			{ id: 1, name: 'Hoi dan IT', age: '30' },
// 			{ id: 2, name: 'Alfie', age: '25' },
// 			{ id: 3, name: 'Nancy', age: '18' },
// 		],
// 	};

// 	handleAddNewUser = (userObj) => {
// 		console.log('>>>Check data from parent: ', userObj);
// 		this.setState({
// 			listUsers: [userObj, ...this.state.listUsers],
// 		});
// 	};
// 	handleDeleteUser = (userId) => {
// 		let listUsersClone = [...this.state.listUsers];
// 		listUsersClone = listUsersClone.filter((item) => item.id !== userId);
// 		this.setState({
// 			listUsers: listUsersClone,
// 		});
// 	};
// 	render() {
// 		return (
// 			<div>
// 				<AddUserInfor handleAddNewUser={this.handleAddNewUser} />
// 				<br />
// 				<br />
// 				<DisplayInfor listUsers={this.state.listUsers} handleDeleteUser={this.handleDeleteUser} />
// 			</div>
// 		);
// 	}
// }

const MyComponent = (props) => {
	const [listUsers, setListUsers] = useState([
		{ id: 1, name: 'Hoi dan IT', age: '30' },
		{ id: 2, name: 'Alfie', age: '25' },
		{ id: 3, name: 'Nancy', age: '18' },
	]);

	const handleAddNewUser = (userObj) => {
		setListUsers([userObj, ...listUsers]);

		// this.setState({
		// 	listUsers: [userObj, ...this.state.listUsers],
		// });
	};

	const handleDeleteUser = (userId) => {
		let listUsersClone = listUsers;
		listUsersClone = listUsersClone.filter((item) => item.id !== userId);
		setListUsers(listUsersClone);

		// this.setState({
		// 	listUsers: listUsersClone,
		// });
	};
	return (
		<div>
			<AddUserInfor handleAddNewUser={handleAddNewUser} />
			<br />
			<br />
			<DisplayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
		</div>
	);
};

export default MyComponent;
