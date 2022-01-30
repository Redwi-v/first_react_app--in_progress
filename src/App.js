import './css/style.css';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
	return (
		<div className='App'>
			<Header />
			<div className='main'>
				<div className='container flex'>
					<Sidebar />
					<div className='content'>
						<Routes>
							<Route path={'/'} element={<Profile />} />

							<Route path={'/dialogs/*'} element={<DialogsContainer />} />
						</Routes>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
