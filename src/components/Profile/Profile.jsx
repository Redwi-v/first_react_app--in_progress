import classes from './profile.module.css';
import Profile_Info from './Profile_Info/Profile_Info';
import MyPostsContainer from './MyPosts/MyPostContainer';

export default function Profile(props) {
	return (
		<div className={classes.profile}>
			<Profile_Info />
			<MyPostsContainer />
		</div>
	);
}
