import classes from './users.module.css';
import { User } from './User/User';
import Preloader from '../commons/Preloder/preloader';

const Users = props => {
	const {
		users,
		addFriend,
		changeCurrentPage,
		totalUsersCount,
		pageSize,
		selectedPage,
		isFeching,
		toggleFollowingProgress,
		followingProgress,
	} = props;

	const renderUsersList = () => {
		if (isFeching) {
			return <Preloader />;
		}
		return users.map(user => {
			return (
				<User
					user={user}
					addFriend={addFriend}
					deleteFriend={props.deleteFriend}
					key={user.id}
					toggleFollowingProgress={toggleFollowingProgress}
					followingProgress={followingProgress}
				/>
			);
		});
	};

	const renderPageButtons = () => {
		let pagesCount = Math.ceil(totalUsersCount / pageSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}

		return pages.map(page => {
			return (
				<button
					className={`${selectedPage === page ? classes.selectedPage : ''} , ${classes.buttonList}`}
					key={page}
					onClick={() => changeCurrentPage(page)}>
					{page}
				</button>
			);
		});
	};

	return (
		<div className={classes.users}>
			<h1 className={classes.title}>Users</h1>
			<div className=''>{renderPageButtons()}</div>

			<ul className={classes.users_list}>{renderUsersList()}</ul>

			<button className={classes.showMoreBtn} onClick={props.getUsers}>
				Show more
			</button>
		</div>
	);
};

export default Users;
