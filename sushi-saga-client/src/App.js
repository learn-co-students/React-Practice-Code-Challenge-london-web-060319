import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sushiSliceIndex: 0,
    budget: 100,
    eatenSushi: [],
  }
  
  fetchSushis = () => {
    return fetch(API)
    .then(resp => resp.json())
  }

  componentDidMount(){
    this.fetchSushis()
    .then(sushis => this.setState({sushis}))
  }

  getFourSushi = () => {
    return this.state.sushis.slice(this.state.sushiSliceIndex, this.state.sushiSliceIndex + 4)
  }

  handleClick = () => {
    this.setState({sushiSliceIndex: this.state.sushiSliceIndex +4})
  }

  eatSushi = (sushi) => {
    if (this.state.sushis.includes(sushi) && this.state.budget >= sushi.price) {
      this.setState({eatenSushi: [...this.state.eatenSushi, sushi], budget: this.state.budget - sushi.price})
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eatenSushi={this.state.eatenSushi} sushis={this.getFourSushi()} handleClick={this.handleClick} eatSushi={this.eatSushi}/>
        <Table eatenSushi={this.state.eatenSushi} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;