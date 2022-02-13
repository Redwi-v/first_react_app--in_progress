import { connect } from 'react-redux';
import Header from './Header';
import { setUserAuthData, setAuthUserProfileInfo } from '../../redux/auth_reduser';
import { useEffect } from 'react';
import axios from 'axios';

const HeaderContainer = props => {
	const getAuthUserProfileIngo = userId => {
		if (userId) {
			axios
				.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
				.then(res => {
					props.setAuthUserProfileInfo(res.data);
				});
		}
	};
	const getAuthUserInfo = () => {
		axios
			.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
				withCredentials: true,
			})
			.then(res => {
				const { id, login, email } = res.data.data;
				props.setUserAuthData(id, email, login);
			});
	};

	useEffect(() => {
		getAuthUserInfo();
		getAuthUserProfileIngo(props.userId);
	}, [props.isAuth]);

	return <Header {...props} />;
};

const mapStateToProps = state => {
	const { userId, email, login, isAuth, profile } = state.authReduser;
	return {
		userId,
		email,
		login,
		isAuth,
		smallPhoto: state.authReduser.profile.photos.small,
		fullName: profile.fullName,
	};
};

export default connect(mapStateToProps, { setUserAuthData, setAuthUserProfileInfo })(
	HeaderContainer,
);
