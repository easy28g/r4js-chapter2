import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return(
      <div>
        
        <ProfileInfo></ProfileInfo>
        <MyPosts posts={props.profilePage.postsData}
                 newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch}></MyPosts>

      </div>
    );
}

export default Profile;