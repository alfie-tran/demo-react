import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';

const TableUserPaginate = (props) => {
	//B1: de render ra mang tren man hinh ==> useState
	const { listUsers, pageCount } = props;

	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		// event.selected la chuoi string cho nen ep kieu ==> +event.selected de tra ra kq: int
		props.fetchListUsersWithPaginate(+event.selected + 1);
		props.setCurrentPage(+event.selected + 1); //moi 1 lan cap nhat xong ta se setCurrentPage de cap nhat lai trang hien tai. Vi khi nguoi dung click vao 1 trang nao do thi se goi lai API va lay DS user moi.
		console.log(`User requested page number ${event.selected}`);
	};
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
										<button className="btn btn-secondary" onClick={() => props.handleClickBtnView(item)}>
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
										<button
											className="btn btn-danger"
											onClick={() => {
												props.handleClickBtnDelete(item);
											}}
										>
											Delete
										</button>
									</td>
								</tr>
							);
						})}

					{listUsers && listUsers.length === 0 && (
						<tr>
							<td colSpan={'5'}>Not found data</td>
						</tr>
					)}
				</tbody>
			</table>
			<div className="user-pagination">
				<ReactPaginate
					nextLabel="Next >"
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					marginPagesDisplayed={2}
					pageCount={pageCount}
					previousLabel="< Prev"
					renderOnZeroPageCount={null}
					className="pagination"
					pageClassName="page-item"
					pageLinkClassName="page-link"
					previousClassName="page-item"
					previousLinkClassName="page-link"
					nextClassName="page-item"
					nextLinkClassName="page-link"
					breakClassName="page-item"
					breakLinkClassName="page-link"
					activeClassName="active"
					disabledClassName="disabled"
					forcePage={props.currentPage - 1} //forcePage tính trang từ 0 nên phải trừ đi 1
				/>
			</div>
		</>
	);
};
export default TableUserPaginate;
