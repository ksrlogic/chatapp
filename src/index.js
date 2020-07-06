import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import setupSocket from "./sockets";

import reducers from "./reducers";

import createSagaMiddleWare from "redux-saga";
import handleNewMessage from "./sagas";
import username from "./utils/name";

const sagaMiddleware = createSagaMiddleWare();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
const socket = setupSocket(store.dispatch, username);
sagaMiddleware.run(handleNewMessage, { socket, username });
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
