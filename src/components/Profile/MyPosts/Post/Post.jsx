import s from './Post.module.css';

const Post = (props) => {
    return(
        <div  className={s.item}>

            <img src="https://cdn.vox-cdn.com/thumbor/Qx76tJ3jDYE1DaWikfLa4fKLxJQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/5850929/avtr-he-bg-02.0.jpg"></img>
            
                {props.messages}
            
            <div>
                <span>Like {props.likesCount}</span>
            </div>

        </div>
    );
}


export default Post;