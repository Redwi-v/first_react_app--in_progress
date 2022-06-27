import authApi from '../API/auth';
import profileApi from '../API/profile';

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
				isAuth: action.userData.isAuth,
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
	profileApi.getProfile(userId).then(res => {
		dispatch(setAuthUserProfileInfo(res.data));
	});
};

export const getAuthUserInfo = () => dispatch => {
	authApi.me().then(res => {
		let isAuth = true;
		if (res.data.messages[0]) {
			isAuth = false;
		}
		const { id, login, email } = res.data.data;
		dispatch(setUserAuthData(id, email, login, isAuth));
	});
};

export const login = (email, password, rememberMe) => async dispatch => {
	console.log(email, password, rememberMe);
	const { resultCode } = await (await authApi.login(email, password, rememberMe)).data;

	if (resultCode === 0) {
		dispatch(getAuthUserInfo());
	}
};

//AC

export const setUserAuthData = (userId, email, login, isAuth) => {
	return {
		type: SET_USER_DATA,
		userData: {
			userId,
			email,
			login,
			isAuth,
		},
	};
};

export const setAuthUserProfileInfo = profile => {
	return {
		type: SET_USER_PROFILE_INFO,
		profile,
	};
};
