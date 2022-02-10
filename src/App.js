import './css/style.css';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
	return (
		<div className='App'>
			<Header />
			<div className='main'>
				<div className='container flex'>
					<Sidebar />
					<div className='content'>
						<Routes>
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
