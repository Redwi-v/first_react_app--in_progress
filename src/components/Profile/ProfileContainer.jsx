import React, { useEffect } from 'react';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profile_page';
import { connect } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Preloader from '../commons/Preloder/preloader';

const ProfileContainer = props => {
	let userId = useParams().userId || props.AuthUserId;

	const getUserProfile = () => {
		if (userId) {
			let linkForUserProfile = `https://social-network.samuraijs.com/api/1.0/profile/${userId}`;
			return axios
				.get(linkForUserProfile)
				.then(response => response.data)
				.then(profile => {
					props.setUserProfile(profile);
				});
		}
	};

	useEffect(() => {
		getUserProfile();
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
	setUserProfile,
};

export default connect(mapStateToProps, dispatches)(ProfileContainer);
