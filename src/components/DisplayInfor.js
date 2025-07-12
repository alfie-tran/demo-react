import React from 'react';

//props => viết tắt của properties: tài sản

class DisplayInfor extends React.Component {
	render() {
		//destructuring array/object
		const { listUsers } = this.props;

		return (
			<div>
				{listUsers.map((user, index) => {
					console.log(user);
					return (
						<div key={user.id}>
							<div>My name's {user.name}</div>
							<div>My age's {user.age}</div>
							<hr />
						</div>
					);
				})}
			</div>
		);
	}
}

export default DisplayInfor;
