import { connect } from 'react-redux';
import { Users } from './Users';
import { addFriedAC, deleteFriendAC, getUsersAC } from '../../redux/users_page';

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
	};
};
const mapDispathToProps = (dispathc) => {
	return {
		add_friend(userId) {
			dispathc(addFriedAC(userId));
		},
	};
};

const UsersContainer = connect(mapStateToProps, mapDispathToProps)(Users);
export default UsersContainer;
