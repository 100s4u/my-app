import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) =>{
	return(
			<main>
				<div className="row">
					<ProfileInfo />
					<MyPosts posts={props.posts} />
				</div>
			</main>	
		);
}

export default Profile;