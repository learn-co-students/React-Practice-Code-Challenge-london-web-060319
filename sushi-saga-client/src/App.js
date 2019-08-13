import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    eaten: [],
    page: 1,
    plates: 0,
    wallet: 100,
    sliceStart: 0,
    sliceEnd: 4
  };

  fetchData = () => {
    // const limitQuery = "/?_limit=4";
    // const pageQuery = `&_page=${this.state.page}`;
    return fetch(API).then(resp => resp.json());
  };

  componentDidMount() {
    this.fetchData().then(sushis =>
      this.setState({
        sushis
      })
    );
  }

  moreSushi = () => {
    this.setState({
      sliceStart: this.state.sliceStart + 4,
      sliceEnd: this.state.sliceEnd + 4
    });
  };

  eatSushi = id => {
    const sushi = this.state.sushis.find(s => s.id === id);
    const { wallet } = this.state;
    if (wallet - sushi.price >= 0) {
      this.setState({
        plates: this.state.plates + 1,
        eaten: [...this.state.eaten, id],
        wallet: wallet - sushi.price
      });
    }
  };

  render() {
    const { sushis, sliceStart, sliceEnd, plates, wallet, eaten } = this.state;
    return (
      <div className="app">
        <SushiContainer
          sushis={sushis.slice(sliceStart, sliceEnd)}
          moreSushi={this.moreSushi}
          eatSushi={this.eatSushi}
          eaten={eaten}
        />
        <Table emptyPlates={plates} wallet={wallet} />
      </div>
    );
  }
}

export default App;
