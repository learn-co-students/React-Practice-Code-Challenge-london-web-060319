import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  const sushiList = props.sushis.map(sushi => (
    <Sushi
      key={sushi.i}
      {...sushi}
      eatSushi={props.eatSushi}
      eaten={props.eaten}
    />
  ));
  return (
    <Fragment>
      <div className="belt">
        {sushiList}
        <MoreButton moreSushi={props.moreSushi} />

      </div>
    </Fragment>
  );
};

export default SushiContainer;
