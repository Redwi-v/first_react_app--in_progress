import classes from './Profile.module.css';

export default function (props) {
	return (
		<div className={classes.profile__info}>
			<img
				className={classes['profile__header-img']}
				src='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701313431.jpg'
				alt=''
			/>

			<div className={classes.main__info}>
				<img
					className={classes.profile__img}
					src='https://avatars.mds.yandex.net/i?id=d6ab550a20170242f731eee5f3e595be-4571053-images-thumbs&n=13&exp=1'
					alt=''
				/>
				<div className={classes.profile__about}>
					<h3 className={classes.profile__name}>Andrei K.</h3>
					<p className={classes.profile__birth}>
						Date of Birth:
						<span className={classes['profile__birth-value']}> 2 jaruary</span>
					</p>
					<p className={classes.profile__city}>
						City: <span className={classes['profile__city-value']}>Minsk</span>
					</p>
				</div>
			</div>
		</div>
	);
}
