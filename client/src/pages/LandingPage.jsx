import styled from 'styled-components';

function LandingPage() {
	return (
		<Wrapper>
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
		</Wrapper>
	);
}

export default LandingPage;

const Wrapper = styled.div`
	min-height: 100vh;
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url('/images/bg.jpg');

	.subHeading {
		text-align: center;
	}

	.mainHeading {
		margin-top: 350px;
		text-align: center;
	}

	.headings {
		color: aliceblue;
	}

	.signIn {
		color: aliceblue;
		background-color: red;
		border-radius: 3px;
		display: flex;
		position: absolute;
		top: 20px;
		right: 10px;
	}
`;
