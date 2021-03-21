import classes from './ProfileInfo.module.css';

const ProfileInfo = () =>{
	return (
			<div className={classes.main__contnet__block}>
				<div className={classes.profile_pic}>
					<img src="https://sun2-9.userapi.com/impg/QBEK0n9c5KndKRAO27JZGyGCnHvYY3LcHS5vkg/0SwVz4MlycA.jpg?size=200x0&quality=96&crop=575,0,850,850&sign=323f943e208ce739ee79efede4b11271&ava=1" alt="profile-pic" />
				</div>
				<h2>Иван Иванов</h2>
				<h3>Дата рождения: 32 июня</h3>
				<h3>Город: Да</h3>
				<h3>Обучение: ТГ...ТГУ....Т....ПТУ в общем</h3>
				<h3>Web-Site: mistersandman.ru</h3>
			</div>
		);
}

export default ProfileInfo;