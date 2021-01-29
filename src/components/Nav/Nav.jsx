import classes from './Nav.module.css';

const Nav = () =>{
	return (
			<nav className={classes.nav}>
				<div className={"row " + classes.nav__items}>
					<div>Messages</div>
					<div>News</div>
					<div>Music</div>
					<div>Settings</div>
				</div>
			</nav>
		);
}

export default Nav;
	