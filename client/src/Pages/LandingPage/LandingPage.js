import './LandingPage.css';

function LandingPage() {
	return (
		<div className='Container'>
			<div className='header'>
				<h4 className='appName'>YouFlix</h4>
				<button className='signIn'>Sign-In</button>
			</div>
			<div className='mainBody'>
				<div className='headings'>
					<h1 className='mainHeading'>
						Enjoy unlimted streaming anywhere, anytime
					</h1>
					<h4 className='subHeading'>
						Easy cancellation. No strings attached.
					</h4>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
