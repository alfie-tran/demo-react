import React, { useState } from 'react';

// class AddUserInfor extends React.Component {
// 	state = {
// 		name: '',
// 		address: 'Hoi dan IT',
// 		age: '',
// 	};

// 	handleOnChangeInput = (event) => {
// 		this.setState({
// 			name: event.target.value,
// 		});
// 	};
// 	handleOnChangeAge = (event) => {
// 		this.setState({
// 			age: event.target.value,
// 		});
// 	};
// 	handleOnSubmit = (event) => {
// 		event.preventDefault();

// 		this.props.handleAddNewUser({
// 			id: Math.floor(Math.random() * 100) + 1 + '-random',
// 			name:  name,
// 			age:  age,
// 		});
// 	};
// 	render() {
// 		return (
// 			<div>
// 				My name is { name} and I'm { age}
// 				<form
// 					onSubmit={(event) => {
// 						this.handleOnSubmit(event);
// 					}}
// 				>
// 					<label>Your name: </label>
// 					<input
// 						type="text"
// 						value={ name}
// 						onChange={(event) => {
// 							this.handleOnChangeInput(event);
// 						}}
// 					/>
// 					<label>Your age: </label>
// 					<input
// 						type="text"
// 						value={ age}
// 						onChange={(event) => {
// 							this.handleOnChangeAge(event);
// 						}}
// 					/>
// 					<button>Submit</button>
// 				</form>
// 			</div>
// 		);
// 	}
// }

const AddUserInfor = (props) => {
	const [name, setName] = useState('');
	const [address, setAddress] = useState('Hoi Dan IT');
	const [age, setAge] = useState('');
	const handleOnChangeInput = (event) => {
		setName(event.target.value);
	};
	const handleOnChangeAge = (event) => {
		setAge(event.target.value);
	};
	const handleOnSubmit = (event) => {
		event.preventDefault();
		props.handleAddNewUser({
			id: Math.floor(Math.random() * 100) + 1 + '-random',
			name,
			age,
		});
	};
	return (
		<div>
			My name is {name} and I'm {age}
			<form
				onSubmit={(event) => {
					handleOnSubmit(event);
				}}
			>
				<label>Your name: </label>
				<input
					type="text"
					value={name}
					onChange={(event) => {
						handleOnChangeInput(event);
					}}
				/>
				<label>Your age: </label>
				<input
					type="text"
					value={age}
					onChange={(event) => {
						handleOnChangeAge(event);
					}}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
};
export default AddUserInfor;
