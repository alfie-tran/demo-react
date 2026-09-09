import './App.scss';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom'; //thu vien dieu huong nguoi dung
const App = () => {
	return (
		<div className="App">
			<Header />
			<div>
				test link
				<div>
					<button>
						{/* Link to: dieu huong nguoi dung. Ben trong thu vien da co ham event.preventDefault cho nen no ko can reload lai chuong trinh*/}
						<Link to="/users">Go to User page</Link>
					</button>
					<button>
						<Link to="/admins">Go to Admin page</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
