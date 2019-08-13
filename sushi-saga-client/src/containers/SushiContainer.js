import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => (
          <Sushi
            key={sushi.id}
            sushi={sushi}
            isEaten={props.isEaten}
            eatSushi={props.eatSushi}
            payForSushi={props.payForSushi}
          />
        ))}
        <MoreButton seeMoreSushis={props.seeMoreSushis} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
