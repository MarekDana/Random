import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends React.Component {
  state = {
    beers: []
  };
  constructor() {
    super();
    this.getBeers();
  }

  getBeers() {
    fetch(`http://private-9c94be-namelist3.apiary-mock.com/questions`)
      .then(data => data.json())
      .then(beers => {
        this.setState({ beers: beers.arrNames });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let beerNames = this.state.beers.map(beer => (
      <li>
        <strong> {beer.name}</strong>
      </li>
    ));
    return <div> {beerNames}</div>;
    //<div> {JSON.stringify(this.state.beers)}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
