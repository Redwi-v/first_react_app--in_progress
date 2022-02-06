import { connect } from 'react-redux';
import Users from './Users';
import {
	addFriedAC,
	deleteFriendAC,
	getUsersAC,
	chageCurrentPageAC,
	getTotalUsersCount,
} from '../../redux/users_page';
import axios from 'axios';
import React from 'react';

class UsersAPIcomponent extends React.Component {
	sendRequestToUsers = selectPage => {
		let linkForUsers = `https://social-network.samuraijs.com/api/1.0/users?page=${selectPage}&count=${this.props.pageSize}`;

		axios.get(linkForUsers).then(response => {
			this.props.getUsers(response.data.items);

			this.props.getTotalUserCount(response.data.totalCount);
		});
	};

	componentDidMount() {
		this.sendRequestToUsers(this.props.selectedPage);
	}

	ChageCurrentPageHandler = page => {
		this.props.sendRequestToUsers(page);
		this.props.changeCurrentPage(page);
	};

	render() {
		return <Users users={this.props.users} />;
	}
}

const mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		selectedPage: state.usersPage.selectedPage,
	};
};
const mapDispathToProps = dispathc => {
	return {
		add_friend(userId) {
			dispathc(addFriedAC(userId));
		},
		delete_friend(userId) {
			dispathc(deleteFriendAC(userId));
		},
		getUsers(Users) {
			dispathc(getUsersAC(Users));
		},
		changeCurrentPage(pageNumber) {
			dispathc(chageCurrentPageAC(pageNumber));
		},
		getTotalUserCount(userCount) {
			dispathc(getTotalUsersCount(userCount));
		},
	};
};

const UsersContainer = connect(mapStateToProps, mapDispathToProps)(UsersAPIcomponent);
export default UsersContainer;
