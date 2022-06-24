import Button from 'components/Button';
import NavBar from 'components/NavBar';
import styled from 'styled-components';

function SignInPage() {
	return (
		<>
			<NavBar />
			<Wrapper>SignIn</Wrapper>
			<Button />
		</>
	);
}
export default SignInPage;
const Wrapper = styled.div`
	/* min-height: 300vh; */
	background: white;
`;
