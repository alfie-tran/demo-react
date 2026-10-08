import './Register.scss';
import { useNavigate } from 'react-router-dom'; //useNavigate: hook dieu huong nguoi dung
import { useState } from 'react';
import { postRegister } from '../../services/apiService';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');

	//dung useNavigate de dieu huong nguoi dung sau khi dang ky thanh cong
	const navigate = useNavigate();

	const [isShowPassword, setIsShowPassword] = useState(false);

	//dung regex de validate email
	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};
	const handleRegister = async () => {
		//validate
		const isValidEmail = validateEmail(email);
		if (!isValidEmail) {
			toast.error('Invalid Email');
			return;
		}
		if (!password) {
			toast.error('Invalid Password');
			return;
		}
		//call apis
		let data = await postRegister(email, password);
		// neu tao tai khoan thanh cong, dieu huong nguoi dung ve trang login. neu Ko thi bao loi
		if (data && data.EC === 0) {
			toast.success(data.EM);
			navigate('/login');
		}
		if (data && data.EC !== 0) {
			toast.error(data.EM);
		}
	};
	return (
		<div className="register-container">
			<div className="header">
				<span>Already have an account?</span>
				<button type="button" className="" onClick={() => navigate('/login')}>
					Login
				</button>
			</div>
			<div className="title col-4 mx-auto">Register</div>
			<div className="Welcome col-4 mx-auto">Start your journey?</div>
			<div className="content-form col-4 mx-auto">
				<div className="form-group ">
					<label>Email (*)</label>
					<input
						type={'email'}
						className="form-control"
						value={email}
						required
						onChange={(event) => setEmail(event.target.value)}
					/>
				</div>
				<div className="form-group password-group">
					<label>Password (*)</label>
					<input
						type={isShowPassword ? 'text' : 'password'}
						className="form-control"
						value={password}
						required
						onChange={(event) => setPassword(event.target.value)}
					/>

					{isShowPassword ? (
						<span className="icon-eye" onClick={() => setIsShowPassword(false)}>
							<FaEye />
						</span>
					) : (
						<span className="icon-eye" onClick={() => setIsShowPassword(true)}>
							<FaEyeSlash />
						</span>
					)}
				</div>
				<div className="form-group ">
					<label>Username</label>
					<input
						type={'text'}
						className="form-control"
						value={username}
						onChange={(event) => setUsername(event.target.value)}
					/>
				</div>
				<div className="">
					<button type="button" className="btn btn-dark mt-2" onClick={() => handleRegister()}>
						Create my account
					</button>
				</div>
				<div className="text-center" onClick={() => navigate('/')}>
					<span className="back"> &#60;&#60; Go to HomePage</span>
				</div>
			</div>
		</div>
	);
};

export default Register;
