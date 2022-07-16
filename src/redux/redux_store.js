import { combineReducers, createStore, applyMiddleware } from "redux";
import { profileReduser } from "./profile_page";
import { dialogsReduser } from "./dialogs_page";
import { usersReduser } from "./users_page";
import { authReduser } from "./auth_reduser";
import thunkMiddleware from "redux-thunk";
import { app } from "./app";

let reduses = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  usersPage: usersReduser,
  authReduser: authReduser,
  app: app,
});

export let store = createStore(reduses, applyMiddleware(thunkMiddleware));
window.state = store;
