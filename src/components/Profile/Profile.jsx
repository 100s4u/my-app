import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) =>{
	return(
			<main>
				<div className="row">
					<ProfileInfo />
					<MyPosts 
						posts={props.profilePage.posts} 
						newPostText={props.profilePage.newPostText}
						addPost={props.addPost}
						updateNewPostText={props.updateNewPostText}/>
				</div>
			</main>	
		);
}

export default Profile;