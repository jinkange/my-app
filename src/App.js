import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Fragment } from "react";
function Herder(props) {
  return (
    <h1>
      <a
        href="/"
        onClick={function(event) {
          event.preventDefault(); // 이벤트를 방지함
          props.onChangeMode();
        }}
      >
        {props.title}
      </a>
    </h1>
  );
}
function Nav(props) {
  const list = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    list.push(
      <li>
        <a href={"./read/" + t.id}>{t.title}</a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{list}</ol>
    </nav>
  );
}
function App() {
  const nav = [
    { id: 1, title: "1", body: "1..." },
    { id: 2, title: "2", body: "2..." },
    { id: 3, title: "3", body: "3..." },
  ];
  return (
    <Fragment>
      <Herder
        title="test"
        onChangeMode={function() {
          alert("test");
        }}
      />
      <Nav topics={nav}></Nav>
    </Fragment>
  );
}

export default App;
