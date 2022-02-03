import classes from './users.module.css';
import { User } from './User/User';

export const Users = (props) => {

	if(props.users.length === 0){
		props.getUsers([
				{ id: 1, name: 'Andrei', status: 'hi, i love this world', friends: true },
				{ id: 2, name: 'Andrei', status: 'hi, i love this world', friends: true },
				{ id: 3, name: 'Andrei', status: 'hi, i love this world', friends: false },
				{ id: 4, name: 'Andrei', status: 'hi, i love this world', friends: false },

		])
	}

	const newUser = () => {
		let id = props.users.length + 1
		props.getUsers([
			{ id: id, name: 'Andrei', status: 'hi, i love this world', friends: false },
		])
	}

	let usersList = props.users.map((user) => {
		return <User user={user} addFriend={props.add_friend} deleteFriend={props.delete_friend} key={user.id} />;
	});
	return (
		<div className={classes.users}>
			<h1 className={classes.title}>Users</h1>
			<ul className={classes.users_list}>{usersList}</ul>
			<button className={classes.showMoreBtn} onClick={newUser}>Show more</button>
		</div>
	);
};
