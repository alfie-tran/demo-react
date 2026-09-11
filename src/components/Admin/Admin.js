import SideBar from './SideBar';
import './Admin.scss';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

import { Outlet } from 'react-router-dom';

const Admin = (props) => {
	const [collapsed, setCollapsed] = useState(false); // mình thêm useState để quản lý trạng thái collapsed của sidebar
	return (
		<div className="admin-container">
			<div className="admin-sidebar">
				<SideBar collapsed={collapsed} />{' '}
				{/* truyền collapsed vào component SideBar để điều khiển trạng thái thu gọn của sidebar */}
			</div>
			<div className="admin-content">
				<div className="admin-header">
					<FaBars
						onClick={() => {
							setCollapsed(!collapsed);
						}}
					/>
				</div>

				<div className="admin-main">
					<Outlet />
				</div>
			</div>
		</div>
	);
};
export default Admin;
