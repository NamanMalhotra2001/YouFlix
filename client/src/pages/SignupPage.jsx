import NavBar from 'Components/NavBar';
import styled from 'styled-components';

function SignupPage() {
	return (
		<>
			<NavBar />
			<Wrapper>SignUp</Wrapper>
		</>
	);
}
export default SignupPage;
const Wrapper = styled.div`
	min-height: 300vh;
	background: white;
`;
