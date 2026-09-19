import ModalCreateUser from './ModalCreateUser';
import './ManageUsers.scss';
import { FcPlus } from 'react-icons/fc';
import { useState } from 'react';
const ManageUsers = (props) => {
	const [showModalCreateUsers, setShowModalCreateUsers] = useState(false);
	return (
		<div className="manage-user-container">
			<div className="title">Manage Users</div>
			<div className="users-content">
				<div className="btn-add-new">
					<button className="btn btn-primary" onClick={() => setShowModalCreateUsers(true)}>
						<FcPlus />
						Add new Users
					</button>
				</div>
				<div className="table-users-container">table user</div>

				<ModalCreateUser show={showModalCreateUsers} setShow={setShowModalCreateUsers} />
			</div>
		</div>
	);
};
export default ManageUsers;
