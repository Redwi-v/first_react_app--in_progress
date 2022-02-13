import { combineReducers, createStore } from 'redux';
import { profileReduser } from './profile_page';
import { dialogsReduser } from './dialogs_page';
import { usersReduser } from './users_page';
import { authReduser } from './auth_reduser';

let reduses = combineReducers({
	profilePage: profileReduser,
	dialogsPage: dialogsReduser,
	usersPage: usersReduser,
	authReduser: authReduser,
});

export let store = createStore(reduses);
window.state = store;
