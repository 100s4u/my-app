import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

let newPostElement = React.createRef();

let addPost = () => {
	let text = newPostElement.current.value;
	alert(text);
}

const MyPosts = (props) => {
	let postsElement = props.posts.map(p => <Post id={p.id} text={p.message} likesCount={p.likesCount} />)
	return (
			<div className={classes.main__contnet__block}>
				<div className={classes.add__form}>
					<button onClick={ addPost }>Add post</button>
					<input type="text" ref={ newPostElement }/>
				</div>
				{postsElement}
			</div>
		);
}

export default MyPosts;