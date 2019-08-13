import React, { Fragment } from "react";

const Sushi = props => {

  return (
    <div className="sushi">
      <div className="plate" onClick={id => props.eatSushi(props.id)}>
        {
          <img
            src={props.eaten.includes(props.id) ? null : props.img_url}
            width="100%"
          />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  );
};

export default Sushi;
