import classes from './users.module.css';
import { User } from './User/User';
import axios from 'axios';

export const Users = props => {
	if (props.users.length === 0) {
		axios
			.get('https://social-network.samuraijs.com/api/1.0/users/count_1')
			.then(response => {
				props.getUsers(response.data.items);
			});
	}

	const newUser = () => {
		let id = props.users.length + 1;
		props.getUsers([
			{ id: id, name: 'Andrei', status: 'hi, i love this world', friends: false },
		]);
	};

	let usersList = props.users.map(user => {
		return (
			<User
				user={user}
				addFriend={props.add_friend}
				deleteFriend={props.delete_friend}
				key={user.id}
			/>
		);
	});
	return (
		<div className={classes.users}>
			<h1 className={classes.title}>Users</h1>
			<ul className={classes.users_list}>{usersList}</ul>

			<button className={classes.showMoreBtn} onClick={newUser}>
				Show more
			</button>
		</div>
	);
};
