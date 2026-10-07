//Layout: phu trach phan chia component con (cac route cho ung dung)

import App from './App';
import { Routes, Route } from 'react-router-dom';
import User from './components/User/User';
import Admin from './components/Admin/Admin'; // Import the Admin component
import HomePage from './components/Home/HomePage';
import DashBoard from './components/Admin/Content/DashBoard';
import ManageUsers from './components/Admin/Content/ManageUsers';
import Login from './components/Auth/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';
const Layout = (props) => {
	return (
		<>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<HomePage />} />
					<Route path="/users" element={<User />} />
				</Route>
				<Route path="/admins" element={<Admin />}>
					<Route index element={<DashBoard />} />
					<Route path="manage-users" element={<ManageUsers />} />
				</Route>
				<Route path="/login" element={<Login />}></Route>
			</Routes>

			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</>
	);
};

export default Layout;
