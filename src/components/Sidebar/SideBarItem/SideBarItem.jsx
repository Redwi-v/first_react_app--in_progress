import { NavLink } from 'react-router-dom';
import classes from './SideBarItem.module.css';

export default function (props) {
	return (
		<li className={classes.sidebar__item}>
			<NavLink
				className={classes.sidebar__linck}
				className={(navData) =>
					navData.isActive ? classes.active : classes.sidebar__linck
				}
				to={props.to}>
				{props.name}
			</NavLink>
		</li>
	);
}
