import React from 'react';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profile_page';
import { connect } from 'react-redux';
import axios from 'axios';

class ProfileContainer extends React.Component {
	getUserProfile() {
		let linkForUserProfile = `https://social-network.samuraijs.com/api/1.0/profile/2`;
		return axios
			.get(linkForUserProfile)
			.then(response => response.data)
			.then(profile => {
				this.props.setUserProfile(profile);
			});
	}

	componentDidMount() {
		this.getUserProfile();
	}

	render() {
		return <Profile {...this.props} />;
	}
}

const mapStateToProps = state => {
	return {
		profile: state.profilePage.profile,
	};
};

const dispatches = {
	setUserProfile,
};

export default connect(mapStateToProps, dispatches)(ProfileContainer);
