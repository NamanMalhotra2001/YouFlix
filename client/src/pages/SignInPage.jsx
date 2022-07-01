import Button from 'components/Button';
import NavBarAuth from 'components/NavBarAuth';
import styled from 'styled-components';

function SignInPage() {
	return (
		<>
			<NavBarAuth />
			<Wrapper>SignIn</Wrapper>
			<Button />
		</>
	);
}
export default SignInPage;
const Wrapper = styled.div`
	background: white;
`;
