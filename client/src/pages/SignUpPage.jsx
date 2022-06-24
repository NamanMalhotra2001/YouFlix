import NavBar from 'components/NavBar';
import styled from 'styled-components';

function SignUpPage() {
	return (
		<>
			<NavBar />
			<Wrapper>
				<div className='signupContent'>
					<h1 className='mainHeading'>
						Create a free account to start your membership
					</h1>
					<p className='additionalText'>
						You may add additional text here if required
					</p>
					<input className='credentialsEmail' placeholder='  Email'></input>
					<input
						className='credentialsPassword'
						placeholder='  Add a password'
					></input>
					<button className='submit'>NEXT</button>
				</div>
			</Wrapper>
		</>
	);
}
export default SignUpPage;
const Wrapper = styled.div`
	/* min-height: 300vh; */
	background: white;

	.signupContent {
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
		justify-content: center;
	}

	.mainHeading {
		padding-top: 50px;
		text-align: left;
		font-size: 42px;
		width: 470px;
	}

	.additionalText {
		padding-top: 10px;
		align-items: left;
		text-align: left;
		justify-content: left;
	}

	.credentialsEmail {
		border: solid;
		border-width: 1px;
		border-color: black;
		margin-top: 50px;
		width: 470px;
		height: 65px;
	}

	.credentialsPassword {
		border: solid;
		border-width: 1px;
		border-color: black;
		margin-top: 10px;
		width: 470px;
		height: 65px;
	}

	.submit {
		display: flex;
		font-size: xx-large;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		border: none;
		outline: none;
		margin-top: 40px;
		height: 75px;
		width: 470px;
		color: aliceblue;
		background-color: red;
	}
`;
