import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';

import { toast } from 'react-toastify';
import { postCreateNewUser } from '../../../services/apiService';
import _ from 'lodash'; //thu vien dung kiem tra data
const ModalUpdateUser = (props) => {
	const { show, setShow, dataUpdate } = props;

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

	useEffect(() => {
		// console.log('>>>check run useeffect', dataUpdate);
		//kiem tra data co rong hay ko? ==> thu vien lodash: npm install --save-exact lodash@4.17.21
		if (!_.isEmpty(dataUpdate)) {
			//cap nhat lai state
			setEmail(dataUpdate.email);
			setUsername(dataUpdate.username);
			setRole(dataUpdate.role);
			setImage(''); //ko can update vi can phai gui file len phia server
			if (dataUpdate.image) {
				setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
			}
		}
	}, [dataUpdate]); //ham useEffect chỉ chạy khi đã update dữ liệu.

	const handleUploadImage = (event) => {
		//neu user upload anh thi moi cap nhat. nguoc lai ko upload anh thi cho bien bang null
		if (event.target && event.target.files && event.target.files[0]) {
			// cap nhat lai gia tri cho bien previewImage => setPreviewImage
			setPreviewImage(URL.createObjectURL(event.target.files[0]));
			setImage(event.target.files[0]);
		} else {
			// 	setPreviewImage('');
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
		let data = await postCreateNewUser(email, password, username, role, image);
		// console.log('>>> Component res: ', data);
		//neu tao thanh cong se dong form lai
		if (data && data.EC === 0) {
			toast.success(data.EM);
			handleClose();
			await props.fetchListUsers(); //sau khi dong tab User roi thi cho thang con goi nguoc len thang cha.
		}
		if (data && data.EC !== 0) {
			toast.error(data.EM);
		}
	};
	console.log('>>> check ham render : ', dataUpdate);
	return (
		<>
			<Modal size="xl" show={show} onHide={handleClose} backdrop={false} className="modal-add-user">
				<Modal.Header closeButton>
					<Modal.Title>Update a User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form className="row g-3">
						<div className="col-md-6">
							<label className="form-label">Email</label>
							<input
								type="email"
								className="form-control"
								value={email}
								disabled
								onChange={(event) => setEmail(event.target.value)}
							/>
						</div>
						<div className="col-md-6">
							<label className="form-label">Password</label>
							<input
								type="password"
								className="form-control"
								value={password}
								disabled
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
export default ModalUpdateUser;
