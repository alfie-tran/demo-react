import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';

import _ from 'lodash'; //thu vien dung kiem tra data

const ModalViewUser = (props) => {
	const { show, setShow, dataView } = props;

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
		//kiem tra data co rong hay ko? ==> thu vien lodash: npm install --save-exact lodash@4.17.21
		if (!_.isEmpty(dataView)) {
			//cap nhat lai state
			setEmail(dataView.email);
			setUsername(dataView.username);
			setRole(dataView.role);
			setImage(''); //ko can update vi can phai gui file len phia server
			if (dataView.image) {
				setPreviewImage(`data:image/jpeg;base64,${dataView.image}`);
			}
		}
	}, [dataView]); //ham useEffect chỉ chạy khi đã update dữ liệu.

	return (
		<>
			<Modal size="xl" show={show} onHide={handleClose} backdrop={false} className="modal-add-user">
				<Modal.Header closeButton>
					<Modal.Title>Profile</Modal.Title>
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
								// onChange={(event) => {
								// 	handleUploadImage(event);
								// }}
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
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default ModalViewUser;
