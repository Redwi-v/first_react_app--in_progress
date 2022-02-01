import classes from './sidebar.module.css';
import Item from './SideBarItem/SideBarItem';

export default function Sidebar() {
	return (
		<nav className={classes.sidebar}>
			<ul className={classes.sidebar__list}>
				<Item to='/' name='Profile' />
				<Item to='/dialogs' name='Dialogs' />
				<Item to='/dialogss' name='News' />
				<Item to='/dialogss' name='Music' />
				<Item to='/users' name='Users' />
				<Item to='/dialogss' name='Setting' />
			</ul>
		</nav>
	);
}
