import { connect } from 'react-redux';
import Users from './Users';
import {
	addFriend,
	deleteFriend,
	chageCurrentPage,
	toggleFollowingProgress,
	getUsersThunkCreator,
} from '../../redux/users_page';
import React from 'react';

class UsersAPIcomponent extends React.Component {
	sendRequestToUsers = selectPage => {
		this.props.getUsersThunkCreator(selectPage, this.props.pageSize);
	};

	componentDidMount() {
		this.sendRequestToUsers(this.props.selectedPage);
	}

	ChageCurrentPageHandler = page => {
		this.sendRequestToUsers(page);
		this.props.chageCurrentPage(page);
	};

	render() {
		return (
			<Users
				users={this.props.users}
				addFriend={this.props.addFriend}
				deleteFriend={this.props.deleteFriend}
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				changeCurrentPage={this.ChageCurrentPageHandler}
				selectedPage={this.props.selectedPage}
				isFeching={this.props.isFeching}
				followingProgress={this.props.followingProgress}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		selectedPage: state.usersPage.selectedPage,
		followingProgress: state.usersPage.followingProgress,
		isFeching: state.usersPage.isFeching,
	};
};
// const mapDispathToProps = dispathc => {
// 	return {
// 		add_friend(userId) {
// 			dispathc(addFriedAC(userId));
// 		},
// 		delete_friend(userId) {
// 			dispathc(deleteFriendAC(userId));
// 		},
// 		getUsers(Users) {
// 			dispathc(getUsersAC(Users));
// 		},
// 		changeCurrentPage(pageNumber) {
// 			dispathc(chageCurrentPageAC(pageNumber));
// 		},
// 		getTotalUserCount(userCount) {
// 			dispathc(getTotalUsersCountAC(userCount));
// 		},
// 		toggleIsFeching(fechingValue) {
// 			dispathc(toggleIsFechingAC(fechingValue));
// 		},
// 	};
// };

let actionCreators = {
	addFriend,
	deleteFriend,
	chageCurrentPage,
	toggleFollowingProgress,
	getUsersThunkCreator,
};

const UsersContainer = connect(mapStateToProps, actionCreators)(UsersAPIcomponent);
export default UsersContainer;
