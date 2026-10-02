import './Login.scss';
import { useState } from 'react';
const Login = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleLogin = () => {
		alert('>>> login ');
	};
	return (
		<div className="login-container">
			<div className="header">Don't have an account yet?</div>
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
				<span>Forgot password?</span>
				<div className="">
					<button type="button" className="btn btn-dark" onClick={() => handleLogin()}>
						Login to Account
					</button>
				</div>
			</div>
		</div>
	);
};
export default Login;
