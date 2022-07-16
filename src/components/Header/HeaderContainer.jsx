import { connect } from "react-redux";
import Header from "./Header";
import { getAuthUserData, logout } from "../../redux/auth_reduser";
import { useEffect } from "react";

const HeaderContainer = (props) => {
  const {
    userId,
    // methods
    getAuthUserData,
  } = props;

  useEffect(() => {
    userId && getAuthUserData(props.userId);
  }, [props.isAuth]);

  return <Header {...props} />;
};

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, {
  getAuthUserData,
  logout,
})(HeaderContainer);
