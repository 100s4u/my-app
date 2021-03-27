import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

	let postsElement = props.posts.map(p => <Post id={p.id} text={p.message} likesCount={p.likesCount} />)

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
		props.updateNewPostText('');
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}
	
	return (
			<div className={classes.main__contnet__block}>
				<div className={classes.add__form}>
					<button onClick={ addPost }>Add post</button>
					<input onChange={onPostChange} type="text" value={props.newPostText} ref={ newPostElement }/>
				</div>
				{postsElement}
			</div>
		);
}

export default MyPosts;