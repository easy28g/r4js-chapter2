import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";

const MyPosts = (props) => {

    let postElement = props.posts.map( p => <Post messages={p.messages} likesCount={p.likesCount}></Post>);

    let newPost = React.createRef();

    let addPost = () =>{
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return(
        <div className={s.mypostBlock}>

            <h3>My Posts</h3>

            <textarea onChange={onPostChange} ref={newPost} value={props.newPostText}></textarea>

            <button onClick={addPost}>Add post</button>
       
        <div className={s.posts}>
            {/* {postElement} */}
            {postElement}
        </div>
         
        </div>
    );
}

export default MyPosts;