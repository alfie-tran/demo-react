import { deleteUser } from '../../../services/apiService';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {
	const { show, setShow, dataDelete } = props;

	const handleClose = () => setShow(false);
	const handleSubmitDeleteUser = async () => {
		// alert('>>>click me');
		let data = await deleteUser(dataDelete.id);
		if (data && data.EC === 0) {
			toast.success(data.EM);
			handleClose();

			props.setCurrentPage(1); //cap nhat lai trang
			await props.fetchListUsersWithPaginate(1); //goi lai api de lay DS user moi
		}
		if (data && data.EC !== 0) {
			toast.error(data.EM);
		}
	};

	return (
		<>
			<Modal show={show} onHide={handleClose} backdrop="static">
				<Modal.Header closeButton>
					<Modal.Title>Confirm Delete the User?</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Are you sure delete this user. Email = <b>{dataDelete && dataDelete.email ? dataDelete.email : ''}</b>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="primary" onClick={() => handleSubmitDeleteUser()}>
						Confirm
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default ModalDeleteUser;
