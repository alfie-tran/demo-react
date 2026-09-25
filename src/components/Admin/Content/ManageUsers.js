import ModalCreateUser from './ModalCreateUser';
import './ManageUsers.scss';
import { FcPlus } from 'react-icons/fc';
import TableUser from './TableUser';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../../services/apiService';
import ModalUpdateUser from './ModalUpdateUser';
const ManageUsers = (props) => {
	const [showModalCreateUsers, setShowModalCreateUsers] = useState(false);
	const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
	const [dataUpdate, setDataUpdate] = useState({});

	//B1: de render ra mang tren man hinh ==> useState
	const [listUsers, setListUsers] = useState([]);

	//B2: goi API
	//useEffect <=> componentDidMount trong class (chỉ gọi 1 lần duy nhất): Nhưng nó theo dõi và cập nhật liên tục.
	useEffect(() => {
		fetchListUsers();
	}, []); //mang rong tuc la bao cho React chi chay ham nay 1 lan duy nhat.

	//B3 cap nhat lai state cho DS user
	const fetchListUsers = async () => {
		let res = await getAllUsers();
		if (res.EC === 0) {
			setListUsers(res.DT);
		}
	};
	const handleClickBtnUpdate = (user) => {
		setShowModalUpdateUser(true);
		// console.log('>>>Update user: ', user);
		setDataUpdate(user);
	};
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
				<div className="table-users-container">
					<TableUser listUsers={listUsers} handleClickBtnUpdate={handleClickBtnUpdate} />
				</div>

				<ModalCreateUser
					show={showModalCreateUsers}
					setShow={setShowModalCreateUsers}
					fetchListUsers={fetchListUsers}
				/>
				<ModalUpdateUser show={showModalUpdateUser} setShow={setShowModalUpdateUser} dataUpdate={dataUpdate} />
			</div>
		</div>
	);
};
export default ManageUsers;
