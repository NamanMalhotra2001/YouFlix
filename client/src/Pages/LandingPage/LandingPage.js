import './LandingPage.css';

function LandingPage() {
	return (
		<div className='Container'>
			<div className='lPage'>
				<h4 className='appName'>YouFlix</h4>
				<button className='signIn'>Sign-In</button>
				<h1 className='mainHeading'>
					Enjoy unlimted streaming anywhere, anytime
				</h1>
				<h4 className='subHeading'>
					Easy cancellation. No strings attached
				</h4>
			</div>
		</div>
	);
}

export default LandingPage;
