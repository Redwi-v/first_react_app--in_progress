const ADD_FRIEND = 'ADD_FRIED';
const DELETE_FRIEND = 'DELETE_FRIED';
const GET_USERS = 'GET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const GET_TOTAL_USERS_COUNT = 'GET_TOTAL_USERS_COUNT';

const intitialState = {
	users: [],
	pageSize: 3,
	totalUsersCount: 0,
	selectedPage: 2,
};

export const usersReduser = (state = intitialState, action) => {
	switch (action.type) {
		case ADD_FRIEND:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userid) {
						return { ...user, friends: true };
					}
					return user;
				}),
			};
		case DELETE_FRIEND:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userid) {
						return { ...user, friends: false };
					}
					return user;
				}),
			};
		case GET_USERS:
			return { ...state, users: [...state.users, ...action.newUsers] };
		case CHANGE_CURRENT_PAGE:
			return {
				...state,
				selectedPage: action.pageNumber,
			};
		case GET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.totalUsersCount,
			};
		default:
			return state;
	}
};

export const addFriedAC = userid => {
	return {
		type: ADD_FRIEND,
		userid: userid,
	};
};

export const deleteFriendAC = userid => {
	return {
		type: DELETE_FRIEND,
		userid,
	};
};

export const getUsersAC = newUsers => {
	return {
		type: GET_USERS,
		newUsers,
	};
};

export const chageCurrentPageAC = pageNumber => {
	return {
		type: CHANGE_CURRENT_PAGE,
		pageNumber,
	};
};

export const getTotalUsersCount = totalUsersCount => {
	return {
		type: GET_TOTAL_USERS_COUNT,
		totalUsersCount,
	};
};
