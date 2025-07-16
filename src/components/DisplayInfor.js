import React from 'react';
import './DisplayInfor.scss';
import logo from './../logo.svg';

//props => viết tắt của properties: tài sản

class DisplayInfor extends React.Component {
	state = {
		isShowListUsers: true,
	};
	handleShowHide = () => {
		this.setState({
			isShowListUsers: !this.state.isShowListUsers,
		});
	};
	render() {
		//destructuring array/object
		const { listUsers } = this.props;
		//console.log(listUsers); // console.table(listUsers);
		return (
			<div className="display-infor-container">
				{/* <img src={logo} /> */}
				<div>
					<span
						onClick={() => {
							this.handleShowHide();
						}}
					>
						{this.state.isShowListUsers === true ? 'Hide list users:' : 'Show list users:'}
					</span>
				</div>
				{this.state.isShowListUsers && (
					<>
						{listUsers.map((user, index) => {
							return (
								<div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
									<div>My name's {user.name}</div>
									<div>My age's {user.age}</div>
									<div>
										<button
											onClick={() => {
												this.props.handleDeleteUser(user.id);
											}}
										>
											Delete
										</button>
									</div>
									<hr />
								</div>
							);
						})}
					</>
				)}
			</div>
		);
	}
}

export default DisplayInfor;
