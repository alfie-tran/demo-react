import SideBar from './SideBar';
import './Admin.scss';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
const Admin = (props) => {
	const [collapsed, setCollapsed] = useState(false); // mình thêm useState để quản lý trạng thái collapsed của sidebar
	return (
		<div className="admin-container">
			<div className="admin-sidebar">
				<SideBar collapsed={collapsed} />{' '}
				{/* truyền collapsed vào component SideBar để điều khiển trạng thái thu gọn của sidebar */}
			</div>
			<div className="admin-content">
				<FaBars
					onClick={() => {
						setCollapsed(!collapsed);
					}}
				/>
				Content go here
			</div>
		</div>
	);
};
export default Admin;
