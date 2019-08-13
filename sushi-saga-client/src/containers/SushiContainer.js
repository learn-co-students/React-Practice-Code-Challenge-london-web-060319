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
  // {id: 1, name: "Tako Supreme", img_url: "https://sushistickers.com/img/sushi-slice_99.png", price: 20
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
