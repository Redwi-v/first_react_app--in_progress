import { combineReducers, createStore } from 'redux';
import { profileReduser } from './profile_page';
import { dialogsReduser } from './dialogs_page';
import { usersReduser } from './users_page';

let reduses = combineReducers({
	profilePage: profileReduser,
	dialogsPage: dialogsReduser,
	usersPage: usersReduser,
});

export let store = createStore(reduses);
window.store = store;
