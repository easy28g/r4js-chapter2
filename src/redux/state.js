const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, messages: "Hi, how are you?", likesCount: 15 },
        { id: 2, messages: "I am good!", likesCount: 20 },
        { id: 3, messages: "I am in New-York!", likesCount: 30 },
      ],
      newPostText: 'it-samurai.com'
    },
  
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Azamat" },
        { id: 2, name: "Jusup" },
      ],
  
      messagesData: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "Yo!" },
        { id: 3, message: "You cool!" },
      ],
      newMessageBody: ''
    }
  },

  _callSubscriber(){
    console.log('State changed');
  },

  getState(){
    return this._state;
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },
  

  addPost() {
    let newPost = {
      id: 4,
      messages: this._state.profilePage.newPostText,
      likesCount: 0
    };

    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  
  dispatch(action){
    if(action.type === ADD_POST){
      let newPost = {
        id: 4,
        messages: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if(action.type === UPDATE_NEW_POST_TEXT){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if(action.type === UPDATE_NEW_MESSAGE_BODY){
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if(action.type === SEND_MESSAGE){
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messagesData.push({ id:4, message:body });
      this._callSubscriber(this._state);
    }
  }
  
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageCreator = () => ({ type: SEND_MESSAGE});

export const updateNewMessageCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default store;

window.store = store;
