import classes from './users.module.css';
import { User } from './User/User';

const Users = props => {
	const renderUsersList = () => {
		return props.users.map(user => {
			return (
				<User
					user={user}
					addFriend={props.add_friend}
					deleteFriend={props.delete_friend}
					key={user.id}
				/>
			);
		});
	};

	const renderPageButtons = () => {
		let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}

		return pages.map(page => {
			return (
				<button
					className={props.selectedPage === page ? classes.selectedPage : ''}
					key={page}
					onClick={() => props.ChageCurrentPageHandler(page)}>
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
