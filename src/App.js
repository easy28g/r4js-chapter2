import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navigator from "./components/Navigator/Navigator";
import Profile from "./components/Profile/Profile";
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>

      <div className="app-wrapper">
        <Header></Header>

        <Navigator></Navigator>

        <div className="app-wrapper-content">
        <Routes>
           <Route path='/dialogs/*' element={<Dialogs store={props.store}
                                                      // dialogs={props.appState.dialogsPage.dialogsData}
                                                      // messages={props.appState.dialogsPage.messagesData}
                                                      />} />
           <Route path='/profile' element={<Profile profilePage={props.appState.profilePage}
                                                    dispatch={props.dispatch} />} />
           <Route path='/news' element={<News/>} />
           <Route path='/musics' element={<Music/>} />
           <Route path='/settings' element={<Settings/>} />
         </Routes>
        </div>

      </div>


    </BrowserRouter>
  );
};

export default App;
