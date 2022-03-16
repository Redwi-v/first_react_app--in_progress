import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const mapStateToProps = state => {
	return {
		isAuth: state.authReduser.isAuth,
	};
};

const withRedirect = Component => {
	const RedirectComponent = props => {
		if (!props.isAuth) return <Navigate to={'/login'} />;
		return <Component {...props} />;
	};
	const ContectedRedirectCoponent = connect(mapStateToProps)(RedirectComponent);

	return ContectedRedirectCoponent;
};

export default withRedirect;
