import { combineReducers, createStore } from 'redux';
import { profileReduser } from './profile_page';
import { dialogsReduser } from './dialogs_page';

let reduses = combineReducers({
	profilePage: profileReduser,
	dialogsPage: dialogsReduser,
});

export let store = createStore(reduses);
