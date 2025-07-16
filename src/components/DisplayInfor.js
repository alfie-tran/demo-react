import React from 'react';
import './DisplayInfor.scss';

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
		console.log(listUsers); // console.table(listUsers);
		return (
			<div className="display-infor-container">
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
					<div>
						{listUsers.map((user, index) => {
							return (
								<div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
									<div style={{ color: 'yellow', paddingTop: '50px' }}>My name's {user.name}</div>
									<div>My age's {user.age}</div>
									<hr />
								</div>
							);
						})}
					</div>
				)}
			</div>
		);
	}
}

export default DisplayInfor;
