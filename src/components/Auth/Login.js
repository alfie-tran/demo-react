import './Login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; //useNavigate: hook dieu huong nguoi dung
import { postLogin } from '../../services/apiService';
import { toast } from 'react-toastify';

const Login = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	//dung regex de validate email
	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};
	const handleLogin = async () => {
		// validate
		const isValidEmail = validateEmail(email);
		if (!isValidEmail) {
			toast.error('Invalid Email');
			return;
		}

		if (!password) {
			toast.error('Invalid Password');
			return;
		}
		//submit api
		let data = await postLogin(email, password);
		if (data && data.EC === 0) {
			toast.success(data.EM);
			navigate('/');
		}
		if (data && data.EC !== 0) {
			toast.error(data.EM);
		}
	};
	return (
		<div className="login-container">
			<div className="header">
				<span>Don't have an account yet?</span>
				<button type="button" className="" onClick={() => navigate('/register')}>
					Sign up
				</button>
			</div>
			<div className="title col-4 mx-auto">Login</div>
			<div className="Welcome col-4 mx-auto">Hello, who's this?</div>
			<div className="content-form col-4 mx-auto">
				<div className="form-group ">
					<label>Email</label>
					<input
						type={'email'}
						className="form-control"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Password</label>
					<input
						type={'password'}
						className="form-control"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
				</div>
				<span className="forgot-password">Forgot password?</span>
				<div className="">
					<button type="button" className="btn btn-dark mt-2" onClick={() => handleLogin()}>
						Login to Account
					</button>
				</div>
				<div className="text-center" onClick={() => navigate('/')}>
					<span className="back"> &#60;&#60; Go to HomePage</span>
				</div>
			</div>
		</div>
	);
};
export default Login;
