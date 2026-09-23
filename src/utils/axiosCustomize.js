import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:8081/', //duong link cua bankend ma minh muon goi toi
	//timeout: 1000, //thoi gian chờ tối đa cho mỗi request 1 giây. Nếu ko phản hồi request sẽ bị hủy + báo lỗi timeout
});

// Add a request interceptor
instance.interceptors.request.use(
	function (config) {
		// Do something before the request is sent
		return config;
	},
	function (error) {
		// Do something with the request error
		return Promise.reject(error);
	}
);
//interceptor dung tuong tu nhu middleware. Truoc khi server gửi về cho client thì thằng interceptor nó đang can thiệp vào.
// Add a response interceptor
instance.interceptors.response.use(
	function (response) {
		// Any status code that lies within the range of 2xx causes this function to trigger
		// Do something with response data
		// console.log('>>> interceptor: ', response);
		return response && response.data ? response.data : response;
	},
	function (error) {
		// Any status codes that fall outside the range of 2xx cause this function to trigger
		// Do something with response error
		// console.log('>>>run error: ', error.response);
		return error && error.response && error.response.data ? error.response.data : Promise.reject(error);
	}
);
export default instance;
