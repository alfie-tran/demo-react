import ModalCreateUser from './ModalCreateUser';
import './ManageUsers.scss';
const ManageUsers = (props) => {
	return (
		<div className="manage-user-container">
			<div className="title">Manage Users</div>
			<div className="users-content">
				<div className="">
					<button>Add new Users</button>
				</div>
				<div className="">table user</div>

				<ModalCreateUser />
			</div>
		</div>
	);
};
export default ManageUsers;
