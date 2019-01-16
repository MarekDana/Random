import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  
  state = {
    beers: []
  }
  
  fetchBeers = (param) => {
    fetch(`https://randomuser.me/api/${param}`)
      .then((resp) => resp.json())
      .then(function (data) {
        let osoba = data.results;
      

        console.log(`${osoba.name.first} ${osoba.name.last}`);
        
  });
  
  
  }
  
  render(){
    let beers = this.state.beers.map(beer => <p style={styles}> {beer.name} </p>);
    return(
        <div>
          <button onClick={this.fetchBeers}> 
              All 
          </button>
          <button onClick={() => this.fetchBeers("food=taco") }> 
              Beers for taco!
          </button>
          
          <section>
            { beers }
          </section>
        </div>
    );
  }
}

const styles = {
  font: '100%/1.5 monospace',
  color: '#222',
  fontWeight: 'bold'
}


render(<App />, document.getElementById('root'));