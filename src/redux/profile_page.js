import userApi from '../API/user';
import profileApi from '../API/profile';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const UPDATE_STATUS = 'UPDATE_STATUS';
const SET_STATUS = 'GET_STATUS';

let initialState = {
	myPosts: [
		{ id: 1, text: 'hi my posts' },
		{ id: 2, text: 'hi my posts' },
		{ id: 3, text: 'hi my posts' },
		{ id: 4, text: 'hi 11my posts' },
	],
	newPostText: 'aaa',
	profile: null,
	status: null,
};

export const profileReduser = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: state.myPosts.length + 1,
				text: state.newPostText,
			};

			return {
				...state,
				myPosts: [...state.myPosts, newPost],
				newPostText: '',
			};
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.text,
			};
		}
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			};
		case UPDATE_STATUS:
			return { ...state };
		case SET_STATUS:
			return { ...state, status: action.status };
		default:
			return state;
	}
};

//thunks
export const getuserProfile = userId => async dispatch => {
	const res = await userApi.getProfile(userId);
	dispatch(setUserProfile(res.data));
};
export const getStatus = userId => dispatch => {
	profileApi.getStatus(userId).then(status => {});
};

export const updateStatus = status => dispatch => {
	profileApi.updateStatus(status).then(res => {
		console.log(res);
		if (res.resultCode === 0) {
			dispatch(setStatus(status));
		} else {
			console.log('invalid status');
		}
	});
};

// Ac
export const addPsotActionCreator = () => ({
	type: ADD_POST,
});
export const updateNewPostTextActionCreator = text => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		text: text,
	};
};
export const setUserProfile = profile => {
	return {
		type: SET_USER_PROFILE,
		profile,
	};
};
export const setStatus = status => {
	return {
		type: SET_STATUS,
		status,
	};
};
