import React, { useEffect } from 'react';
import Profile from './Profile';
import { getuserProfile } from '../../redux/profile_page';
import { connect } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProfileContainer = props => {
	let userId = useParams().userId || props.AuthUserId;

	useEffect(() => {
		if (userId) {
			props.getuserProfile(userId);
		}
	}, [userId]);

	return <Profile {...props} />;
};

const mapStateToProps = state => {
	return {
		profile: state.profilePage.profile,
		AuthUserId: state.authReduser.userId,
	};
};

const dispatches = {
	getuserProfile,
};

export default connect(mapStateToProps, dispatches)(ProfileContainer);
