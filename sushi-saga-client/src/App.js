import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3003/sushis"

const getSushis = () => fetch(API).then(res => res.json())

class App extends Component {

  state = {
    sushis: [],
    eatenSushis: [],
    budget: Math.floor(Math.random() * 30) + 10,
    showTopUp: false
  }

  componentDidMount() {
    getSushis()
      .then(sushis => {
        this.setState({ sushis })
      })
  }

  eatSushi = (sushi) => {
    if (this.state.eatenSushis.includes(sushi.id)) return;
    if (this.state.budget < sushi.price) {
      this.setState({ showTopUp: true })
      return;
    }

    // double checking not needed
    if (this.state.budget >= sushi.price) {

      this.setState({
        eatenSushis: [...this.state.eatenSushis, sushi.id],
        budget: this.state.budget - sushi.price
      })
    }

  }

  addFunds = (value) => this.setState({
    budget: this.state.budget + value,
    showTopUp: false
  })

  render() {

    const sushis = this.state.sushis.map(sushi => {
      return ({
        ...sushi,
        isEaten: this.state.eatenSushis.includes(sushi.id)
      })
    })

    return (
      <div className="app">
        <SushiContainer sushis={sushis} eatSushi={this.eatSushi} />
        <Table eatenSushis={this.state.eatenSushis} budget={this.state.budget} />
        {
          this.state.showTopUp &&
          <div>
            not enough funds
            <button onClick={() => this.addFunds(5)}>add $5</button>
            <button onClick={() => this.addFunds(15)}>add $15</button>
            <button onClick={() => this.addFunds(25)}>add $25</button>
          </div>
        }
      </div>
    );
  }
}

export default App;
