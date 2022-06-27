import React, { useEffect } from 'react';
import Profile from './Profile';
import { getuserProfile, getStatus, updateStatus } from '../../redux/profile_page';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import withRedirect from '../../hoc/withRedirect';
import { compose } from 'redux';

const ProfileContainer = props => {
	const { AuthUserId, getuserProfile, getStatus } = props;

	let userId = useParams().userId || AuthUserId;

	useEffect(() => {
		if (userId) {
			getuserProfile(userId);
			getStatus(userId);
		}
	}, [userId]);

	return <Profile {...props} />;
};

const mapStateToProps = state => {
	return {
		profile: state.profilePage.profile,
		AuthUserId: state.authReduser.userId,
		status: state.profilePage.status,
	};
};

const dispatches = {
	getuserProfile,
	getStatus,
	updateStatus,
};

export default compose(connect(mapStateToProps, dispatches), withRedirect)(ProfileContainer);
