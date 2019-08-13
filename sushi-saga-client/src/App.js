import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    slice: [0, 4],
    money: 100,
    plates: []
  }

  fetchGetSushis = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      this.addEaten(data)
    })
  }
  addEaten = (sushis) => {
    sushis.map(sushi => {
      this.setState({
        sushis: [
          ...this.state.sushis,
          {
            ...sushi,
            eaten: false
          }
        ]
      })
    })
  }

  eatSushi = (sushi) => {
    this.setState(prevState => ({
      sushis: prevState.sushis.map(s => s.id === sushi.id ? {...s, eaten: true} : s )
    }), this.setState({plates: [...this.state.plates, sushi]}))
    this.minusMoney(sushi)
  }

  componentDidMount(){
    this.fetchGetSushis()
  }
  nextSushi = () => {
    this.setState({
      slice: [
        this.state.slice[0] + 4, 
        this.state.slice[1] + 4
      ]
    })
  }

  minusMoney = (sushi) => {
    console.log("money")
    this.setState({
      money: this.state.money - sushi.price
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  
          sushis={this.state.sushis} 
          sliceValue={this.state.slice}
          nextSushi={this.nextSushi}
          eatSushi={this.eatSushi}
        />
        <Table plates={this.state.plates} money={this.state.money}/>
      </div>
    );
  }
}

export default App;