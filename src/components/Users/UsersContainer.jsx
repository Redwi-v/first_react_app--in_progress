import { connect } from 'react-redux';
import { Users } from './Users';

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
	};
};
const mapDispathToProps = (dispathc) => ({});

const UsersContainer = connect(mapStateToProps, mapDispathToProps)(Users);
export default UsersContainer;
