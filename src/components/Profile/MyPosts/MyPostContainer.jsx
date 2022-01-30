import MyPosts from './MyPosts';
import {
	addPsotActionCreator,
	updateNewPostTextActionCreator,
} from '../../../redux/profile_page';
import { connect } from 'react-redux';

let f1 = (state) => {
	return {
		posts: state.profilePage.myPosts,
		newPostText: state.profilePage.newPostText,
	};
};
let f2 = (dispatch) => {
	return {
		updateNewPostText: (text) => {
			const action = updateNewPostTextActionCreator(text);
			dispatch(action);
		},
		addNewPost: () => {
			dispatch(addPsotActionCreator());
		},
	};
};
const MyPostsContainer = connect(f1, f2)(MyPosts);
export default MyPostsContainer;
