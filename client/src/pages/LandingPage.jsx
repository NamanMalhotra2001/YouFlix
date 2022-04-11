import styled from 'styled-components';

function LandingPage() {
	return (
		<Wrapper>
			<div className='header'>
				<h1 className='appName'>YouFlix</h1>
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
	min-height: 300vh;
	background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),
		url('/images/bg.jpg');
	background-size: contain;

	.subHeading {
		text-align: center;
	}

	.header {
		background-color: white;
		margin-top: 30px;
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
