import userApi from '../API/userAPI';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
	myPosts: [
		{ id: 1, text: 'hi my posts' },
		{ id: 2, text: 'hi my posts' },
		{ id: 3, text: 'hi my posts' },
		{ id: 4, text: 'hi 11my posts' },
	],
	newPostText: 'aaa',
	profile: null,
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
		default:
			return state;
	}
};

//thunks
export const getuserProfile = userId => async dispatch => {
	const res = await userApi.getProfile(userId);
	dispatch(setUserProfile(res.data));
};

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
