const TableUser = (props) => {
	//B1: de render ra mang tren man hinh ==> useState
	const { listUsers } = props;

	return (
		<>
			<table className="table table-hover table-bordered">
				<thead>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">UserName</th>
						<th scope="col">Email</th>
						<th scope="col">Role</th>
					</tr>
				</thead>
				<tbody>
					{listUsers &&
						listUsers.length > 0 &&
						listUsers.map((item, index) => {
							return (
								<tr key={`table-user-${index}`}>
									<td>{item.id}</td>
									<td>{item.username}</td>
									<td>{item.email}</td>
									<td>{item.role}</td>
									<td>
										<button className="btn btn-secondary" onClick={() => props.handleViewUser(item)}>
											View
										</button>
										<button
											className="btn btn-warning mx-3"
											onClick={() => {
												props.handleClickBtnUpdate(item);
											}}
										>
											Update
										</button>
										<button className="btn btn-danger">Delete</button>
									</td>
								</tr>
							);
						})}

					{listUsers && listUsers.length === 0 && (
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
