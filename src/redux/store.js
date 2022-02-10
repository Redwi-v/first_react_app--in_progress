import { profileReduser } from './profile_page';
import { dialogsReduser } from './dialogs_page';

export const store = {
	_stateData: {
		ProfilePage: {
			myPosts: [
				{ id: 1, text: 'hi my posts' },
				{ id: 2, text: 'hi my posts' },
				{ id: 3, text: 'hi my posts' },
				{ id: 4, text: 'hi 11my posts' },
			],
			newPostText: '',
		},

		dialogsPage: {
			dialogs: [
				{
					id: 1,
					name: 'Andrei',
				},
				{
					id: 2,
					name: 'Arina',
				},
				{
					id: 3,
					name: 'Sveta',
				},
				{
					id: 4,
					name: 'Misha',
				},
				{
					id: 5,
					name: 'Ulia',
				},
				{
					id: 6,
					name: 'Gena',
				},
				{
					id: 7,
					name: 'V',
				},
			],

			massages: [
				{ id: 1, massage: 'hi how are you', name: 'me' },
				{ id: 2, massage: 'hi how are you', name: 'me' },
				{ id: 3, massage: 'hi how are you', name: 'me' },
				{ id: 4, massage: 'hi how are you', name: 'me' },
				{ id: 5, massage: 'hi how are you', name: 'me' },
				{ id: 6, massage: 'hi how are you', name: 'me' },
				{ id: 7, massage: 'hi how are you', name: 'me' },
				{ id: 8, massage: 'hi how are you', name: 'me' },
				{ id: 9, massage: 'hi how are you', name: 'me' },
				{ id: 10, massage: 'hi how are you', name: 'me' },
			],
			massageText: 'hi',
		},
	},

	getStateData() {
		return this._stateData;
	},

	collSubscriber() {},
	subscribe(obserwer) {
		this.collSubscriber = obserwer;
	},

	dispatch(action) {
		this._stateData.ProfilePage = profileReduser(this._stateData.ProfilePage, action);
		this._stateData.dialogsPage = dialogsReduser(this._stateData.dialogsPage, action);

		this.collSubscriber(this._stateData);
	},
};

document.body.state = store;
