import SignInPage from 'pages/SignInPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';

export default function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/signin' element={<SignInPage />} />
					<Route path='/signup' element={<SignupPage />} />
				</Routes>
			</Router>
		</>
	);
}
