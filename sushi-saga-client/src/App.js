import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = page => `http://localhost:3001/sushis?_page=${page}&_limit=4`;

class App extends Component {
  state = {
    sushis: [],
    eaten: [],
    page: 1,
    budget: 100
  };

  fetchSushis = () => {
    fetch(API(this.state.page))
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          sushis: data
        })
        );
    this.setState({ page: this.state.page + 1})
  };

  componentDidMount() {
    this.fetchSushis();
  }

  isEaten = sushi => {
    return this.state.eaten.includes(sushi.id);
  };

  eatSushi = sushi => {
    if (this.isEaten(sushi) === true ) return;
    if (this.state.budget < sushi.price ) return;
    this.setState({
      eaten: [...this.state.eaten, sushi.id],
      budget: this.state.budget - sushi.price
     })
  };

  seeMoreSushis = () => {
    this.fetchSushis()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          isEaten={this.isEaten}
          eatSushi={this.eatSushi}
          seeMoreSushis={this.seeMoreSushis}
        />
        <Table eaten={this.state.eaten} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;
