import videoHomepage from '../../assets/video-homepage.mp4';
const HomePage = (props) => {
	return (
		<div className="homepage-container">
			<video autoPlay muted loop>
				<source type="video/mp4" src={videoHomepage} />
			</video>
			<div className="homepage-content">
				<div className="title-1">There's a better way to ask</div>
				<div className="title-2">
					You don't have to guess. And you don't have to be afraid to ask. Create a safe space for your questions and
					get the answers you need.
				</div>
				<div className="title-3">
					<button>Get's started. It's free.</button>
				</div>
			</div>
		</div>
	);
};
export default HomePage;
