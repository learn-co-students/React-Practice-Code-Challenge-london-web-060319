import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!

const API = "http://localhost:3001/sushis"

class App extends Component {

  state={
    sushis: [],
    eatenSushis:[],
    budget: Math.floor(Math.random() * 30) + 10,
    showTopUp:false
  }
  componentDidMount(){
    fetch(API)
    .then(resp=>resp.json())
    .then(res=>this.setState({
      sushis:res
    }))
  }

  eatSushi = (sushi) => {
    if (this.state.eatenSushis.includes(sushi.id)) return;
    if (this.state.budget < sushi.price) {
      this.setState({ showTopUp: true })
      return;
    }
    if (this.state.budget >= sushi.price) {

      this.setState({
        eatenSushis: [...this.state.eatenSushis, sushi.id],
        budget: this.state.budget - sushi.price
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eatSushi={this.eatSushi} eatenSushis={this.state.eatenSushis} sushis={this.state.sushis} />
        <Table eatenSushis={this.state.eatenSushis} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;