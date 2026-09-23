import { useEffect, useState } from 'react';
import { getAllUsers } from '../../../services/apiService';
const TableUser = (props) => {
	const [listUser, setListUser] = useState([]);

	//useEffect <=> componentDidMount trong class (chỉ gọi 1 lần duy nhất): Nhưng nó theo dõi và cập nhật liên tục.
	useEffect(() => {
		fetchListUsers();
	}, []); //mang rong tuc la bao cho React chi chay ham nay 1 lan duy nhat.

	const fetchListUsers = async () => {
		let res = await getAllUsers();
		// console.log('>>> get list user: ', res);
		if (res.EC === 0) {
			setListUser(res.DT);
		}
	};
	return (
		<>
			<table className="table table-hover table-bordered">
				<thead>
					<tr>
						<th scope="col">No</th>
						<th scope="col">UserName</th>
						<th scope="col">Email</th>
						<th scope="col">Role</th>
					</tr>
				</thead>
				<tbody>
					{listUser &&
						listUser.length > 0 &&
						listUser.map((item, index) => {
							return (
								<tr key={`table-user-${index}`}>
									<td>{index + 1}</td>
									<td>{item.username}</td>
									<td>{item.email}</td>
									<td>{item.role}</td>
									<td>
										<button className="btn btn-secondary">View</button>
										<button className="btn btn-warning mx-3">Update</button>
										<button className="btn btn-danger">Delete</button>
									</td>
								</tr>
							);
						})}

					{listUser && listUser.length === 0 && (
						<tr>
							<td colSpan={'4'}>Not found data</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};
export default TableUser;
