import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/signup' element={<SignupPage />} />
				</Routes>
			</Router>
		</>
	);
}
