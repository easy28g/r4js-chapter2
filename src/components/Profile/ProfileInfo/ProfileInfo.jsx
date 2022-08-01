import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return(
      <div>

        <div>
          <img  className={s.imgsize} src='https://v-thailand.com/wp-content/uploads/2015/01/Plyazhi-Samui.jpg'></img>
        </div>

        <div className={s.descriptionBlock}>
          ava+description
        </div>
      </div>
    );
}

export default ProfileInfo;