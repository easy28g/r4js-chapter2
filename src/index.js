import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App appState={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());

store.subscriber(rerenderEntireTree);
