import classes from './Header.module.css';

const Header = () =>{
	return (
			<header>
				<div className={"row " + classes.header}>
					<h1>Logo</h1>
					<div className={classes.nav}>
						<div className={classes.profile_pic_container}><img className={classes.profile_pic} src="https://sun2-9.userapi.com/impg/QBEK0n9c5KndKRAO27JZGyGCnHvYY3LcHS5vkg/0SwVz4MlycA.jpg?size=50x0&quality=96&crop=575,0,850,850&sign=dadba01f50c1d7ed19a48e946ac355d7&ava=1" alt="profile-pic" /></div>
					</div>
				</div>
			</header>
		);
}

export default Header;