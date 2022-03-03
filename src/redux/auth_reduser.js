import userAPI from '../API/userAPI';
import authApi from '../API/authApi';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PROFILE_INFO = 'SET_USER_PROFILE_INFO';

const initialState = {
	profile: {
		photos: {
			small: null,
		},
		fullName: null,
	},
	userId: null,
	login: null,
	email: null,
	isAuth: false,
};

export const authReduser = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.userData,
				isAuth: true,
			};

		case SET_USER_PROFILE_INFO:
			return {
				...state,
				profile: action.profile,
			};
		default:
			return state;
	}
};

//thunks
export const getAuthUserData = userId => dispatch => {
	userAPI.getProfile(userId).then(res => {
		dispatch(setAuthUserProfileInfo(res.data));
	});
};

export const getAuthUserInfo = () => dispatch => {
	authApi.me().then(res => {
		const { id, login, email } = res.data.data;
		dispatch(setUserAuthData(id, email, login));
	});
};

//AC

export const setUserAuthData = (userId, email, login) => {
	return {
		type: SET_USER_DATA,
		userData: {
			userId,
			email,
			login,
		},
	};
};

export const setAuthUserProfileInfo = profile => {
	return {
		type: SET_USER_PROFILE_INFO,
		profile,
	};
};
