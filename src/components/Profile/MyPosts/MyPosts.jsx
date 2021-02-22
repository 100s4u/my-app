import classes from './MyPosts.module.css';
import Post from './Post/Post'


const MyPosts = (props) => {
	let postsElement = props.posts.map(p => <Post id={p.id} text={p.message} likesCount={p.likesCount} />)
	return (
			<div className={classes.main__contnet__block}>
				<div className={classes.add__form}>
					<input type="text" />
				</div>
				{postsElement}
			</div>
		);
}

export default MyPosts;