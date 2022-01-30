import Dialogs from './Dialogs';
import {
	updateNewMassageTextActionCreator,
	sendMassageActionCreator,
} from '../../redux/dialogs_page';
import { connect } from 'react-redux';

const f1 = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		newMassageText: state.dialogsPage.massageText,
		massages: state.dialogsPage.massages,
	};
};
const f2 = (dispatch) => {
	return {
		updateNewMassageText(text) {
			const action = updateNewMassageTextActionCreator(text);
			dispatch(action);
		},
		sendMassage() {
			dispatch(sendMassageActionCreator());
		},
	};
};

const DialogsContainer = connect(f1, f2)(Dialogs);
export default DialogsContainer;
