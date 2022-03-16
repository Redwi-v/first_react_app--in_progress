import userAPI from '../API/user';

const ADD_FRIEND = 'ADD_FRIED';
const DELETE_FRIEND = 'DELETE_FRIED';
const GET_USERS = 'GET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const GET_TOTAL_USERS_COUNT = 'GET_TOTAL_USERS_COUNT';
const TOGGLE_ISFECHING = 'TOGGLE_PRELOADER';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const intitialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 40,
	selectedPage: 1,
	isFeching: false,
	followingProgress: [],
};

export const usersReduser = (state = intitialState, action) => {
	switch (action.type) {
		case ADD_FRIEND:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userid) {
						return { ...user, followed: true };
					}
					return user;
				}),
			};
		case DELETE_FRIEND:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userid) {
						return { ...user, followed: false };
					}
					return user;
				}),
			};
		case GET_USERS:
			return { ...state, users: [...action.newUsers] };
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
		case TOGGLE_ISFECHING:
			return {
				...state,
				isFeching: action.fechingValue,
			};
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingProgress: action.isProgress
					? [...state.followingProgress, action.id]
					: state.followingProgress.filter(el => el !== action.id),
			};
		default:
			return state;
	}
};

// Thunks
export const getUsersThunkCreator = (selectPage, pageSize) => {
	return dispatch => {
		dispatch(toggleIsFeching(true));

		userAPI.getUsers(selectPage, pageSize).then(data => {
			dispatch(getUsers(data.items));
			dispatch(toggleIsFeching(false));

			// dispatch(getTotalUserCount(response.data.totalCount)); // слишком много пока
		});
	};
};
export const addFriend = userId => {
	return dispatch => {
		dispatch(toggleFollowingProgress(true, userId));
		userAPI.addFriend(userId).then(data => {
			debugger;
			if (data.data.resultCode === 0) {
				dispatch(addFriedAC(userId));
			}
			dispatch(toggleFollowingProgress(false, userId));
		});
	};
};
export const deleteFriend = userId => {
	return dispatch => {
		dispatch(toggleFollowingProgress(true, userId));

		userAPI.deleteFriend(userId).then(data => {
			if (data.data.resultCode === 0) {
				dispatch(deleteFriendAC(userId));
			}
			debugger;
			dispatch(toggleFollowingProgress(false, userId));
		});
	};
};

//Action Creators
export const addFriedAC = userid => ({ type: ADD_FRIEND, userid: userid });
export const deleteFriendAC = userid => ({ type: DELETE_FRIEND, userid });
export const getUsers = newUsers => ({ type: GET_USERS, newUsers });
export const chageCurrentPage = pageNumber => ({ type: CHANGE_CURRENT_PAGE, pageNumber });
export const toggleIsFeching = fechingValue => ({ type: TOGGLE_ISFECHING, fechingValue });
export const getTotalUsersCount = totalUsersCount => ({
	type: GET_TOTAL_USERS_COUNT,
	totalUsersCount,
});
export const toggleFollowingProgress = (isProgress, id) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	isProgress,
	id,
});
