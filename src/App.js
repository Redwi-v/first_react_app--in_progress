import './css/style.css';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

function App(props) {
	return (
		<div className='App'>
			<HeaderContainer />
			<div className='main'>
				<div className='container flex'>
					<Sidebar />
					<div className='content'>
						<Routes>
							<Route path={'/profile/:userId'} element={<ProfileContainer />} />
							<Route path={'/profile/*'} element={<ProfileContainer />} />

							<Route path={'/dialogs/*'} element={<DialogsContainer />} />

							<Route path={'/users/*'} element={<UsersContainer />} />
						</Routes>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
