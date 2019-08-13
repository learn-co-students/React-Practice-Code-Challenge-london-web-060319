import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    shownSushis: [],
    i: 0,
    eatenSushi: [],
    money: 100
  }

  componentDidMount = () => {
    return fetch(API).then(resp => resp.json()).then(data => this.setState({sushis: data, shownSushis:data.slice(0,5)}))
  }

  showMoreSushis = () => {  
    this.setState({i: ((this.state.i + 5)<this.state.sushis.length) ? (this.state.i + 5) : 0}, () => this.setState({shownSushis: this.state.sushis.slice(this.state.i, this.state.i + 5)}))
  }

  eatSushi = (sushi) => {
    sushi.price <= this.state.money ? 
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushi],
      money: this.state.money - sushi.price
    }) : null
  }


  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.shownSushis} showMoreSushis={this.showMoreSushis} eatSushi={this.eatSushi} eatenSushi={this.state.eatenSushi} money={this.state.money}/>
        <Table eatenSushi={this.state.eatenSushi} money={this.state.money}/>
        
      </div>
    );
  }
}

export default App;