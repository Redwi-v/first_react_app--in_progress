const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT';
const SEND_MASSAGE = 'SAND-MASSAGE';

let initialState = {
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
};

export const dialogsReduser = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MASSAGE_TEXT: {
			let stateCopy = { ...state };
			stateCopy.massageText = action.massageText;
			return stateCopy;
		}

		case SEND_MASSAGE: {
			let copyState = { ...state };
			let massages = (copyState.massages = [...copyState.massages]);

			const massage = {
				id: massages.length + 1,
				massage: copyState.massageText,
				name: 'me',
			};
			massages.push(massage);
			copyState.massageText = '';
			return copyState;
		}
		default:
			return state;
	}
};

export const updateNewMassageTextActionCreator = (massageText) => {
	return {
		type: UPDATE_NEW_MASSAGE_TEXT,
		massageText: massageText,
	};
};

export const sendMassageActionCreator = () => {
	return {
		type: SEND_MASSAGE,
	};
};