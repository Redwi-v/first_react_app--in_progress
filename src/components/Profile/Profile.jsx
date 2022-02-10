import classes from './profile.module.css';
import Profile_Info from './Profile_Info/Profile_Info';
import MyPostsContainer from './MyPosts/MyPostContainer';
import Preloader from '../commons/Preloder/preloader';

export default function Profile(props) {
	if (!props.profile) {
		return <Preloader />;
	}
	return (
		<div className={classes.profile}>
			<Profile_Info profile={props.profile} />
			<MyPostsContainer />
		</div>
	);
}
