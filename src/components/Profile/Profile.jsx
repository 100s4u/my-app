import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () =>{
	return (
			<main>
				<div className="row">
					<ProfileInfo />
					<MyPosts />
				</div>
			</main>	
		);
}

export default Profile;