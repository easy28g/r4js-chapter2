import React from "react";
import { sendMessageCreator, updateNewMessageCreator } from "../../redux/state";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogElements = state.dialogsData.map((d) => (<DialogsItem name={d.name} id={d.id}></DialogsItem>));

  let messageElements = state.messagesData.map((m) => (<Messages messages={m.message}></Messages>));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageCreator(body));
  };

  return (
    <div className={s.dialogs}>

      <div className={s.dialogsItems}>{dialogElements}</div>

      <div className={s.messages}>
        <div>{messageElements}</div>
        <div>
          <div>
            <textarea onChange={onNewMessageChange} value={newMessageBody}
                      placeholder='Enter your message'></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Dialogs;
