import videoHomepage from '../../assets/video-homepage.mp4';
const HomePage = (props) => {
	return (
		<div className="home-container">
			<video autoPlay muted loop>
				<source type="video/mp4" src={videoHomepage} />
			</video>
		</div>
	);
};
export default HomePage;
