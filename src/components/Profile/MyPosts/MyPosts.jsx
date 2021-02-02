import classes from './MyPosts.module.css';
import Post from './Post/Post'

let posts = [
	{id: 1, message: 'Some text for testing props work', likesCount: 4},
	{id: 2, message: 'Some text for testing props work (but just second post)', likesCount: 60}
]

let postsElement = posts.map(p => <Post id={p.id} text={p.message} likesCount={p.likesCount}/>)

const MyPosts = () =>{
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