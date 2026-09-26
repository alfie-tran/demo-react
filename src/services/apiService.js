import axios from '../utils/axiosCustomize';

const postCreateNewUser = (email, password, username, role, image) => {
	//Gửi file lên phía server dùng FormData
	const data = new FormData();
	data.append('email', email);
	data.append('password', password);
	data.append('username', username);
	data.append('role', role);
	data.append('userImage', image);
	return axios.post('api/v1/participant', data);
};

const getAllUsers = () => {
	return axios.get('api/v1/participant/all');
};

const putUpdateUser = (id, username, role, image) => {
	const data = new FormData();
	data.append('id', id);
	data.append('username', username);
	data.append('role', role);
	data.append('userImage', image);
	return axios.put('api/v1/participant', data);
};

const getViewUser = (id) => {
	return axios.get(`api/v1/participant/${id}`);
};

// export default postCreateNewUser; La cach goi thong thuong
//minh muon export ra nhieu bien de sau nay dung Them/ Xoa/ Sua
export { postCreateNewUser, getAllUsers, putUpdateUser, getViewUser };
