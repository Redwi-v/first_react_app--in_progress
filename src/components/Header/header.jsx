import classes from './header.module.css';

export default function Header() {
	return (
		<header className={classes.header}>
			<div className='container flex'>
				<img
					className={classes.header__logo}
					src='https://techliveview.com/wp-content/uploads/2021/06/cropped-187550124_324913525674380_5321697720645715999_n.png'
					alt=''
				/>
			</div>
		</header>
	);
}
