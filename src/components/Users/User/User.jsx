import c from './user.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const User = props => {
	const addFriend = () => {
		axios
			.post(
				`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`,
				{},
				{
					withCredentials: true,
					headers: {
						'API-KEY': 'ee72656b-e4b6-457f-983f-35457a0d8aec',
					},
				},
			)
			.then(res => {
				if (res.data.resultCode === 0) {
					props.addFriend(props.user.id);
				}
			});
	};

	const deleteFriend = () => {
		axios
			.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {
				withCredentials: true,
				headers: {
					'API-KEY': 'ee72656b-e4b6-457f-983f-35457a0d8aec',
				},
			})
			.then(res => {
				console.log(res);
				if (res.data.resultCode === 0) {
					props.deleteFriend(props.user.id);
				}
			});
	};

	const checkChoseAvatar =
		props.user.photos.large ||
		props.user.photos.small ||
		'https://avatars.mds.yandex.net/i?id=d3a7ed6fd7ff8aaf0c9b95ffb8b89ef0-3654563-images-thumbs&n=13&exp=1';

	return (
		<li className={c.user}>
			<div className={c.leftSide}>
				<Link to={'/profile/' + props.user.id}>
					<img className={c.userAvatar} src={checkChoseAvatar} alt='avatar' />
				</Link>

				{props.user.followed ? (
					<button className={`${c.deleteFriend} ${c.btn}`} onClick={deleteFriend}>
						Delete friend
					</button>
				) : (
					<button className={`${c.btn} ${c.addFriend}`} onClick={addFriend}>
						Add friend
					</button>
				)}
			</div>

			<div className={c.aboutUser}>
				<div className={c.userName}>{props.user.name}</div>
				<p className={c.userStatus}>{props.user.status}</p>
			</div>
		</li>
	);
};
