const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	myPosts: [
		{ id: 1, text: 'hi my posts' },
		{ id: 2, text: 'hi my posts' },
		{ id: 3, text: 'hi my posts' },
		{ id: 4, text: 'hi 11my posts' },
	],
	newPostText: 'aaa',
};

export const profileReduser = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let stateCopy = { ...state };
			stateCopy.myPosts = [...state.myPosts];

			let newPost = {
				id: stateCopy.myPosts.length + 1,
				text: state.newPostText,
			};

			stateCopy.myPosts.push(newPost);

			stateCopy.newPostText = '';
			return stateCopy;
		}
		case UPDATE_NEW_POST_TEXT: {
			let copyState = { ...state };

			copyState.newPostText = action.text;
			return copyState;
		}
		default:
			return state;
	}
};

export const addPsotActionCreator = () => ({
	type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		text: text,
	};
};
