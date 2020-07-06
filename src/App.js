import React from "react";
import "./App.css";
import { Sidebar } from "./containers/Sidebar.js";
import { MessagesList } from "./containers/MessagesList";
import { AddMessage } from "./containers/AddMessage";

function App() {
  return (
    <div id="container">
      <img src="./logo.jpg" />
      <Sidebar />
      <section id="main">
        <MessagesList />
        <AddMessage />
      </section>
    </div>
  );
}

export default App;
