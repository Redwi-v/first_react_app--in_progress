import c from './user.module.css';

export const User = (props) => {
	return (
		<div className={c.user}>
			<div className={c.leftSide}>
				<img
					className={c.userAvatar}
					src='https://avatars.mds.yandex.net/i?id=d3a7ed6fd7ff8aaf0c9b95ffb8b89ef0-3654563-images-thumbs&n=13&exp=1'
					alt='avatar'
				/>
				<button className={(c.addFriends, c.btn)}>Add friend</button>
				{/* <button className={c.deleteFriends, c.btn}>Delete friend</button> */}
			</div>
			<div className={c.aboutUser}>
				<div className={c.userName}>Andrei.K</div>
				<p className={c.userStatus}>hi i am Andrei</p>
			</div>
		</div>
	);
};
