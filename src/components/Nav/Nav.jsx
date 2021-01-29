import classes from './Nav.module.css';
import {NavLink} from 'react-router-dom';

const Nav = () =>{
	return (
			<nav className={classes.nav}>
				<div className={"row " + classes.nav__items}>
					<div>
						<NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
					</div>
					<div>News</div>
					<div>Music</div>
					<div>Settings</div>
				</div>
			</nav>
		);
}

export default Nav;
	