import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom'; //Link: thu vien dieu huong nguoi dung
import { useNavigate } from 'react-router-dom'; //useNavigate: hook dieu huong nguoi dung
const Header = () => {
	const navigate = useNavigate();
	const handleLogin = () => {
		// alert('me');
		navigate('/login');
	};

	const handleRegister = () => {
		// alert('me');
		navigate('/register');
	};
	return (
		<Navbar expand="lg" bg="light">
			<Container>
				<NavLink to="/" className="navbar-brand">
					Hỏi dân IT
				</NavLink>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavLink to="/" className="nav-link">
							Home
						</NavLink>
						<NavLink to="/users" className="nav-link">
							Users
						</NavLink>
						<NavLink to="/admins" className="nav-link">
							Admin
						</NavLink>
					</Nav>
					<Nav>
						<button className="btn-login" onClick={() => handleLogin()}>
							Log in
						</button>
						<button className="btn-signup" onClick={() => handleRegister()}>
							Sign up
						</button>
						{/* <NavDropdown title="Settings" id="basic-nav-dropdown">
								<NavDropdown.Item>Log in</NavDropdown.Item>
								<NavDropdown.Item>Log out</NavDropdown.Item>
								<NavDropdown.Item>Profile</NavDropdown.Item>
							</NavDropdown> */}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
