const ADD_FRIEND = 'ADD_FRIED';
const DELETE_FRIEND = 'DELETE_FRIED';
const GET_USERS = 'GET_USERS';

const intitialState = {
	users: [],
};

export const usersReduser = (state = intitialState, action) => {
	switch (action.type) {
		case ADD_FRIEND:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userid) {
						return { ...user, friends: true };
					}
					return user;
				}),
			};
		case DELETE_FRIEND:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userid) {
						return { ...user, friends: false };
					}
					return user
				}),
			};
		case GET_USERS:
			return { ...state, users: [...state.users, ...action.newUsers] };
		default:
			return state;
	}
};

export const addFriedAC = (userid) => {
	return {
		type: ADD_FRIEND,
		userid: userid,
	};
};

export const deleteFriendAC = (userid) => {
	return {
		type: DELETE_FRIEND,
		userid,
	};
};

export const getUsersAC = (newUsers) => {
	return {
		type: GET_USERS,
		newUsers,
	};
};
