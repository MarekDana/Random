import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class App extends React.Component {
  state = {
    list: []
  };
  constructor() {
    super();
    this.getNames();
  }

  getNames() {
    fetch(`https://private-d3083-seznam.apiary-mock.com/name`)
      .then(data => data.json())
      .then(list => {
        this.setState({ list: list.arrNames });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let allNames = this.state.list.map(listj => (
      <li>
        <strong> {listj.key}</strong>
        <strong> {listj.name}</strong>
        <strong> {listj.lname}</strong>
      </li>
    ));
    return <div> {allNames}</div>;
    //<div> {JSON.stringify(this.state.beers)}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
