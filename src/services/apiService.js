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

const getViewUser = (userId) => {
	return axios.get('api/v1/participant', { id: userId });
};

const deleteUser = (userId) => {
	return axios.delete('api/v1/participant', { data: { id: userId } });
};

const getUserWithPaginate = (page, limit) => {
	return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};

//Cach viet 1:
// const postLogin = (useEmail, usePassword) => {
// 	return axios.post('api/v1/login', { email: useEmail, password: usePassword });
// };

//Cach viet 2:
const postLogin = (email, password) => {
	return axios.post('api/v1/login', { email, password });
};

const postRegister = (email, password) => {
	return axios.post('api/v1/register', { email, password });
};

// export default postCreateNewUser; La cach goi thong thuong
//minh muon export ra nhieu bien de sau nay dung Them/ Xoa/ Sua
export {
	postRegister,
	postCreateNewUser,
	getAllUsers,
	putUpdateUser,
	getViewUser,
	deleteUser,
	getUserWithPaginate,
	postLogin,
};
