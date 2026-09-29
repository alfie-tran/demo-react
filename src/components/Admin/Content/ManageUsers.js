import ModalCreateUser from './ModalCreateUser';
import './ManageUsers.scss';
import { FcPlus } from 'react-icons/fc';
// import TableUser from './TableUser';
import TableUserPaginate from './TableUserPaginate';
import { useEffect, useState } from 'react';
import { getAllUsers, getUserWithPaginate } from '../../../services/apiService';
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewUser from './ModalViewUser';
import ModalDeleteUser from './ModalDeleteUser';

const ManageUsers = (props) => {
	const LIMIT_USER = 6; //Cho hien thi SL user la 6
	const [pageCount, setPageCount] = useState(0);
	const [showModalCreateUsers, setShowModalCreateUsers] = useState(false);

	const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
	const [dataUpdate, setDataUpdate] = useState({});

	const [showModalViewUser, setShowModalViewUser] = useState(false);
	const [dataView, setDataView] = useState({});

	const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
	const [dataDelete, setDataDelete] = useState({});

	//B1: de render ra mang tren man hinh ==> useState
	const [listUsers, setListUsers] = useState([]);

	//B2: goi API
	//useEffect <=> componentDidMount trong class (chỉ gọi 1 lần duy nhất): Nhưng nó theo dõi và cập nhật liên tục.
	useEffect(() => {
		// fetchListUsers();
		fetchListUsersWithPaginate(1);
	}, []); //mang rong tuc la bao cho React chi chay ham nay 1 lan duy nhat.

	//B3 cap nhat lai state cho DS user
	const fetchListUsers = async () => {
		let res = await getAllUsers();
		if (res.EC === 0) {
			setListUsers(res.DT);
		}
	};

	//ham fetch khac dung de phan trang
	const fetchListUsersWithPaginate = async (page) => {
		let res = await getUserWithPaginate(page, LIMIT_USER);
		if (res.EC === 0) {
			console.log('>>> check ham with paginate: ', res.DT.users);
			setListUsers(res.DT.users);
			setPageCount(res.DT.totalPages);
		}
	};

	const handleClickBtnUpdate = (user) => {
		setShowModalUpdateUser(true);
		// console.log('>>>Update user: ', user);
		setDataUpdate(user);
	};
	//reset data sau khi da update roi va tiep tuc update tiep
	const resetUpdateUser = () => {
		setDataUpdate({});
	};

	const handleClickBtnView = (user) => {
		// console.log('>>>check view user ', user);
		setShowModalViewUser(true);
		setDataView(user);
	};
	const resetDataUser = () => {
		setDataView({});
	};

	const handleClickBtnDelete = (user) => {
		// console.log('>>>data user ', user);
		setShowModalDeleteUser(true);
		setDataDelete(user);
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
					{/* <TableUser
						listUsers={listUsers}
						handleClickBtnUpdate={handleClickBtnUpdate}
						handleClickBtnView={handleClickBtnView}
						handleClickBtnDelete={handleClickBtnDelete}
					/> */}
					<TableUserPaginate
						listUsers={listUsers}
						handleClickBtnUpdate={handleClickBtnUpdate}
						handleClickBtnView={handleClickBtnView}
						handleClickBtnDelete={handleClickBtnDelete}
						fetchListUsersWithPaginate={fetchListUsersWithPaginate}
						pageCount={pageCount}
					/>
				</div>

				<ModalCreateUser
					show={showModalCreateUsers}
					setShow={setShowModalCreateUsers}
					fetchListUsers={fetchListUsers} //goi lai DS User
				/>
				<ModalUpdateUser
					show={showModalUpdateUser}
					setShow={setShowModalUpdateUser}
					dataUpdate={dataUpdate}
					fetchListUsers={fetchListUsers}
					resetUpdateUser={resetUpdateUser}
				/>
				<ModalViewUser
					show={showModalViewUser}
					setShow={setShowModalViewUser}
					dataView={dataView}
					resetDataUser={resetDataUser}
				/>
				<ModalDeleteUser
					show={showModalDeleteUser}
					setShow={setShowModalDeleteUser}
					dataDelete={dataDelete}
					fetchListUsers={fetchListUsers}
				/>
			</div>
		</div>
	);
};
export default ManageUsers;
