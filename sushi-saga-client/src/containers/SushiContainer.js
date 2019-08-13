import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

export default class SushiContainer extends React.Component {
  state = {
    sushisToRender: [0, 1, 2, 3]
  };

  getSushisToRender = () =>
    this.state.sushisToRender.map(index => this.props.sushis[index]);

    nextPageOfSushis = () => this.setState({
      sushisToRender: this.state.sushisToRender.map(
        index =>
          index + 4 >= this.props.sushis.length ?
            (index + 4) - this.props.sushis.length :
            index + 4
      )
    })

  render() {
    const sushis=this.getSushisToRender()
    const sushiDisplay = sushis.map((sushi, index) => {
      
      return (
        <Sushi
          handleClick={() => this.props.eatSushi(sushi)}
          key={index}
          sushi={sushi}
          isEaten={this.props.eatenSushis.includes(sushi.id)}
        />
      );
    });

    return (
      <Fragment>
        <div className="belt">
          {sushiDisplay}
          <MoreButton handleClick={this.nextPageOfSushis} />
        </div>
      </Fragment>
    );
  }
}
