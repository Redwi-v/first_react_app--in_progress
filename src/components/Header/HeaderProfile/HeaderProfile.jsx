import style from './headerPorofile.module.css';
import { NavLink } from 'react-router-dom';


const HeaderProfile = props => {
	const { isAuth } = props;



	const choiseUserPhoto =
		props.smallPhoto ||
		'https://avatars.mds.yandex.net/i?id=d6ab550a20170242f731eee5f3e595be-4571053-images-thumbs&n=13&exp=1';

	if (!isAuth) {
		return <NavLink to={'/login'}>Login</NavLink>;
	}

	return (
		<NavLink to={'/Profile'} className={style.AuthUser}>
			<img className={style.avatar} src={choiseUserPhoto}></img>
			<p className={style.userNmae}>{props.fullName}</p>
		</NavLink>
	);
};

export default HeaderProfile;
