import s from "./../Dialogs.module.css";

const Messages = (props) =>{
    return(
      <div className={s.message}>
        {props.messages}
      </div>
    );
  }

export default Messages;