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
