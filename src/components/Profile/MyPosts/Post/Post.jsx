import classes from './Post.module.css';

const Post = (props) =>{
	return (
			<div className={classes.post__contnet}>
				<div className={classes.profile_pic}>
					<img src="https://sun2-9.userapi.com/impg/QBEK0n9c5KndKRAO27JZGyGCnHvYY3LcHS5vkg/0SwVz4MlycA.jpg?size=200x0&quality=96&crop=575,0,850,850&sign=323f943e208ce739ee79efede4b11271&ava=1" alt="profile-pic" />
				</div>
				<h3>{props.text}</h3>
				<p>Likes: {props.likesCount}</p>
			</div>
		)
}

export default Post;