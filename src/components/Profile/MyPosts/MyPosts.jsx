import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () =>{
	return (
			<div className={classes.main__contnet}>
				<div className={classes.add__form}>
					<input type="text" />
				</div>
				<Post text='Some text for testing props work'/>
				<Post text='Some text for testing props work (but just second post)'/>
			</div>
		);
}

export default MyPosts;