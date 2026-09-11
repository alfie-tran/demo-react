import ModalCreateUser from './ModalCreateUser';
const ManageUsers = (props) => {
	return (
		<div className="manage-user-container">
			<div className="title">Manage Users</div>
			<div className="manage-content">
				<div className="">
					<button>Add new Users</button>
				</div>
				<div className="">
					table user
					<ModalCreateUser />
				</div>
			</div>
		</div>
	);
};
export default ManageUsers;
