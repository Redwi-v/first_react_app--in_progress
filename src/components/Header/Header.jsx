import style from './header.module.css';
import HeaderProfile from './HeaderProfile/HeaderProfile';

export default function Header(props) {
	return (
		<header className={style.header}>
			<div className='container'>
				<div className={style.wraper}>
					<img
						className={style.header__logo}
						src='https://techliveview.com/wp-content/uploads/2021/06/cropped-187550124_324913525674380_5321697720645715999_n.png'
						alt=''
					/>

					<HeaderProfile photo={props.smallPhoto} fullName={props.fullName} />
				</div>
			</div>
		</header>
	);
}
