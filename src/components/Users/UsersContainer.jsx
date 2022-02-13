import { connect } from 'react-redux';
import Users from './Users';
import {
	addFriedAC,
	deleteFriendAC,
	getUsers,
	chageCurrentPage,
	getTotalUsersCount,
	toggleIsFeching,
} from '../../redux/users_page';
import axios from 'axios';
import React from 'react';
import userAPI from '../../API/userAPI';

class UsersAPIcomponent extends React.Component {
	sendRequestToUsers = selectPage => {
		this.props.toggleIsFeching(true);

		userAPI.getUsers(selectPage, this.props.pageSize).then(data => {
			this.props.getUsers(data.items);
			this.props.toggleIsFeching(false);

			// this.props.getTotalUserCount(response.data.totalCount); // слишком много пока
		});
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
				addFriend={this.props.add_friend}
				deleteFriend={this.props.delete_friend}
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				changeCurrentPage={this.ChageCurrentPageHandler}
				selectedPage={this.props.selectedPage}
				isFeching={this.props.isFeching}
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
	add_friend: addFriedAC,
	delete_friend: deleteFriendAC,
	getUsers,
	chageCurrentPage,
	getTotalUsersCount,
	toggleIsFeching,
};

const UsersContainer = connect(mapStateToProps, actionCreators)(UsersAPIcomponent);
export default UsersContainer;
