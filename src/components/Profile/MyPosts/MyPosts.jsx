import classes from './MyPost.module.css';
import Post from './Post/Post';

export default function MyPosts(props) {
	function addPost() {
		props.addNewPost();
	}

	function renderPosts() {
		return props.posts
			.map((post) => {
				return <Post key={post.id} text={post.text} />;
			})
			.reverse();
	}

	function changePostText(event) {
		let text = event.target.value;
		props.updateNewPostText(text);
	}

	return (
		<div className={(classes.profile__posts, 'posts')}>
			<h2 className={classes.posts__title}>My posts</h2>
			<div className={classes['posts__create-post']}>
				<textarea
					className={classes.posts__input}
					type='text'
					value={props.newPostText}
					onChange={changePostText}
				/>
				<button onClick={addPost} className={classes['posts__send-btn']}>
					Send
				</button>
			</div>

			<ul className={classes.posts__list}>{renderPosts()}</ul>
		</div>
	);
}
