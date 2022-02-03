import c from './user.module.css';

export const User = props => {
	const addFriend = () => {
		props.addFriend(props.user.id);
	};

	const deleteFriend= () => {
		props.deleteFriend(props.user.id)
	}

	return (
		<div className={c.user}>
			<div className={c.leftSide}>
				<img
					className={c.userAvatar}
					src='https://avatars.mds.yandex.net/i?id=d3a7ed6fd7ff8aaf0c9b95ffb8b89ef0-3654563-images-thumbs&n=13&exp=1'
					alt='avatar'
				/>
				{props.user.friends ? (
					<button className={`${c.deleteFriend} ${c.btn}`} onClick={deleteFriend}>Delete friend</button>
				) : (
					<button className={`${c.btn} ${c.addFriend}`} onClick={addFriend}>
						Add friend
					</button>
				)}
			</div>
			<div className={c.aboutUser}>
				<div className={c.userName}>Andrei.K</div>
				<p className={c.userStatus}>hi i am Andrei</p>
			</div>
		</div>
	);
};
