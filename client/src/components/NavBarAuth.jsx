import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function NavBarAuth() {
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<Wrapper bgcol={location.pathname !== '/' && 'white'}>
			<h1 className='appName' onClick={() => navigate('/')}>
				YouFlix
			</h1>
			{location.pathname !== '/signin' ? (
				<button className='signIn' onClick={() => navigate('/signin')}>
					Sign-In
				</button>
			) : (
				<></>
			)}
		</Wrapper>
	);
}
export default NavBarAuth;

const Wrapper = styled.div`
	z-index: 999;
	display: flex;
	background-color: ${(props) =>
		props.bgcol ? props.bgcol : 'rgba(255, 255, 255, 0.047)'};
	position: sticky;
	top: 0;
	height: 90px;
	justify-content: space-between;
	align-items: center;
	padding-inline: 10px;

	.appName {
		user-select: none;
		font-size: 45px;
		color: #ff0000e6;
		cursor: pointer;
	}

	.signIn {
		cursor: pointer;
		font-size: large;
		align-items: center;
		justify-content: center;
		height: 35px;
		width: 100px;
		color: aliceblue;
		background-color: red;
		border-radius: 3px;
		display: flex;
		top: 20px;
		right: 10px;
		border: none;
		outline: none;
	}
`;
