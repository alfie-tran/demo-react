import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';
import axios from 'axios';

import { toast } from 'react-toastify';

const ModalCreateUser = (props) => {
	const { show, setShow } = props;

	const handleClose = () => {
		setShow(false);
		setEmail('');
		setPassword('');
		setUsername('');
		setRole('USER');
		setImage('');
		setPreviewImage('');
	};

	//dinh nghia cac state cho reat kiem soat cac input trong form
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [role, setRole] = useState('USER');
	const [image, setImage] = useState('');
	const [previewImage, setPreviewImage] = useState('');

	const handleUploadImage = (event) => {
		//neu user upload anh thi moi cap nhat. nguoc lai ko upload anh thi cho bien bang null
		if (event.target && event.target.files && event.target.files[0]) {
			// cap nhat lai gia tri cho bien previewImage => setPreviewImage
			setPreviewImage(URL.createObjectURL(event.target.files[0]));
			setImage(event.target.files[0]);
		} else {
			// setPreviewImage('');
		}
		console.log('>>> check file upload: ', event.target.files[0]);
	};
	//dùng Regular Expression - Regex
	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	const handleSubmitCreateUser = async () => {
		//validate:
		const isValidEmail = validateEmail(email);
		if (!isValidEmail) {
			// alert('>>>invalid email');
			// toast.info | toast.success
			toast.error('Invalid Email');
			return;
		}
		if (!password) {
			toast.error('Invalid Password');
			return;
		}
		//call apis
		//Gửi file lên phía server dùng FormData
		const data = new FormData();
		data.append('email', email);
		data.append('password', password);
		data.append('username', username);
		data.append('role', role);
		data.append('userImage', image);

		let res = await axios.post('http://localhost:8081/api/v1/participant', data);
		console.log('>>> check res: ', res.data);
		//neu tao thanh cong se dong form lai
		if (res.data && res.data.EC === 0) {
			toast.success(res.data.EM);
			handleClose();
		}
		if (res.data && res.data.EC !== 0) {
			toast.error(res.data.EM);
		}
	};
	return (
		<>
			<Modal size="xl" show={show} onHide={handleClose} backdrop={false} className="modal-add-user">
				<Modal.Header closeButton>
					<Modal.Title>Add new Users</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form className="row g-3">
						<div className="col-md-6">
							<label className="form-label">Email</label>
							<input
								type="email"
								className="form-control"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
							/>
						</div>
						<div className="col-md-6">
							<label className="form-label">Password</label>
							<input
								type="password"
								className="form-control"
								value={password}
								onChange={(event) => setPassword(event.target.value)}
							/>
						</div>

						<div className="col-md-6">
							<label className="form-label">Username</label>
							<input
								type="text"
								className="form-control"
								value={username}
								onChange={(event) => setUsername(event.target.value)}
							/>
						</div>
						<div className="col-md-4">
							<label className="form-label">Role</label>
							<select
								className="form-select"
								value={role}
								onChange={(event) => {
									setRole(event.target.value);
								}}
							>
								<option value="USER">USER</option>
								<option value="ADMIN">ADMIN</option>
							</select>
						</div>
						<div className="col-md-12">
							<label className="form-label label-upload" htmlFor="labelUpload">
								<FcPlus /> Upload File Image
							</label>
							<input
								type="file"
								id="labelUpload"
								hidden
								onChange={(event) => {
									handleUploadImage(event);
								}}
							/>
						</div>
						<div className="col-md-12 img-preview">
							{/* neu co hinh anh thi moi hien thi, neu khong co hinh anh thi khong hien thi  */}
							{/* <img src="https://www.w3schools.com/images/picture.jpg" /> */}
							{previewImage ? <img src={previewImage} /> : <span>Preview Image</span>}
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={() => handleSubmitCreateUser()}>
						Save
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default ModalCreateUser;
