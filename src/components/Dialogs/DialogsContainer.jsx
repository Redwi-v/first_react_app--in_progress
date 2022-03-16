import Dialogs from './Dialogs';
import { updateNewMassageTextActionCreator, sendMassageActionCreator } from '../../redux/dialogs_page';
import { connect } from 'react-redux';
import withRedirect from '../../hoc/withRedirect';
import { compose } from 'redux';

const mapStateToProps = state => {
	return {
		dialogs: state.dialogsPage.dialogs,
		newMassageText: state.dialogsPage.massageText,
		massages: state.dialogsPage.massages,
	};
};
const mapDispatchToProps = dispatch => {
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

export default compose(
	connect(mapStateToProps, mapDispatchToProps),

	withRedirect,
)(Dialogs);
